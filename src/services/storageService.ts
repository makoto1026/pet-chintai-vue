import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '@/firebase';

const PRESENT_PATH = 'presents';

const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

const getExtension = (file: File): string => {
  const fromName = file.name.split('.').pop();
  if (fromName) return fromName.toLowerCase();
  const fromType = file.type.split('/').pop();
  return (fromType || 'bin').toLowerCase();
};

export async function uploadPresentImage(itemId: string, file: File): Promise<string> {
  const ext = getExtension(file);
  const path = `${PRESENT_PATH}/${itemId}/${generateId()}.${ext}`;
  const ref = storageRef(storage, path);
  await uploadBytes(ref, file);
  return await getDownloadURL(ref);
}

export async function uploadPresentImages(itemId: string, files: File[]): Promise<string[]> {
  const urls: string[] = [];
  for (const file of files) {
    urls.push(await uploadPresentImage(itemId, file));
  }
  return urls;
}

export async function deletePresentImageByUrl(url: string): Promise<void> {
  try {
    const ref = storageRef(storage, url);
    await deleteObject(ref);
  } catch (e) {
    // 既に存在しない等のエラーは無視（呼び出し側の冪等性のため）
    console.warn('deletePresentImageByUrl failed:', e);
  }
}
