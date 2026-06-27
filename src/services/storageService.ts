import { ref as storageRef, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage } from '@/firebase';

const PRESENT_PATH = 'presents';
const MAX_IMAGE_DIMENSION = 1600;
const WEBP_QUALITY = 0.78;

const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
};

const canvasToBlob = (canvas: HTMLCanvasElement, type: string, quality: number): Promise<Blob | null> => {
  return new Promise((resolve) => {
    canvas.toBlob((blob) => resolve(blob), type, quality);
  });
};

const resizeImageForUpload = async (file: File): Promise<File> => {
  if (!file.type.startsWith('image/') || file.type === 'image/svg+xml') {
    return file;
  }

  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_IMAGE_DIMENSION / Math.max(bitmap.width, bitmap.height));
    const width = Math.round(bitmap.width * scale);
    const height = Math.round(bitmap.height * scale);
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext('2d');
    if (!context) return file;
    context.drawImage(bitmap, 0, 0, width, height);

    const blob = await canvasToBlob(canvas, 'image/webp', WEBP_QUALITY);
    if (!blob || blob.size >= file.size) {
      return file;
    }

    return new File([blob], `${file.name.replace(/\.[^.]+$/, '')}.webp`, {
      type: 'image/webp',
      lastModified: Date.now(),
    });
  } catch (e) {
    console.warn('resizeImageForUpload failed:', e);
    return file;
  }
};

const getExtension = (file: File): string => {
  if (file.type === 'image/webp') return 'webp';
  const fromName = file.name.split('.').pop();
  if (fromName) return fromName.toLowerCase();
  const fromType = file.type.split('/').pop();
  return (fromType || 'bin').toLowerCase();
};

export async function uploadPresentImage(itemId: string, file: File): Promise<string> {
  const uploadFile = await resizeImageForUpload(file);
  const ext = getExtension(uploadFile);
  const path = `${PRESENT_PATH}/${itemId}/${generateId()}.${ext}`;
  const ref = storageRef(storage, path);
  await uploadBytes(ref, uploadFile, { contentType: uploadFile.type });
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
