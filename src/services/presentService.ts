import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
  writeBatch,
  CollectionReference,
  DocumentData,
} from 'firebase/firestore';
import { db } from '@/firebase';
import {
  PresentTab,
  PresentItem,
  PresentTabInput,
  PresentItemInput,
} from '@/entity/present';

const TABS = 'presentTabs';
const ITEMS = 'presentItems';

const tabsCol = () => collection(db, TABS) as CollectionReference<DocumentData>;
const itemsCol = () => collection(db, ITEMS) as CollectionReference<DocumentData>;

const mapDoc = <T>(snapshotDoc: { id: string; data: () => DocumentData }): T => {
  return { id: snapshotDoc.id, ...snapshotDoc.data() } as unknown as T;
};

// ------- Tabs -------
export async function fetchTabs(): Promise<PresentTab[]> {
  const snap = await getDocs(query(tabsCol(), orderBy('order', 'asc')));
  return snap.docs.map((d) => mapDoc<PresentTab>(d));
}

export async function createTab(input: PresentTabInput): Promise<string> {
  const ref = await addDoc(tabsCol(), {
    ...input,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateTab(id: string, input: Partial<PresentTabInput>): Promise<void> {
  await updateDoc(doc(db, TABS, id), {
    ...input,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteTab(id: string): Promise<void> {
  await deleteDoc(doc(db, TABS, id));
}

export async function reorderTabs(orderedIds: string[]): Promise<void> {
  const batch = writeBatch(db);
  orderedIds.forEach((id, index) => {
    batch.update(doc(db, TABS, id), { order: index, updatedAt: serverTimestamp() });
  });
  await batch.commit();
}

// ------- Items -------
export async function fetchItems(tabId?: string): Promise<PresentItem[]> {
  const q = tabId
    ? query(itemsCol(), where('tabId', '==', tabId), orderBy('order', 'asc'))
    : query(itemsCol(), orderBy('order', 'asc'));
  const snap = await getDocs(q);
  return snap.docs.map((d) => mapDoc<PresentItem>(d));
}

export async function createItem(input: PresentItemInput): Promise<string> {
  const ref = await addDoc(itemsCol(), {
    ...input,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
}

export async function updateItem(id: string, input: Partial<PresentItemInput>): Promise<void> {
  await updateDoc(doc(db, ITEMS, id), {
    ...input,
    updatedAt: serverTimestamp(),
  });
}

export async function deleteItem(id: string): Promise<void> {
  await deleteDoc(doc(db, ITEMS, id));
}

export async function reorderItems(orderedIds: string[]): Promise<void> {
  const batch = writeBatch(db);
  orderedIds.forEach((id, index) => {
    batch.update(doc(db, ITEMS, id), { order: index, updatedAt: serverTimestamp() });
  });
  await batch.commit();
}

// ------- Cascade -------

/** タブを削除し、配下のアイテムも削除する */
export async function deleteTabCascade(tabId: string): Promise<void> {
  const itemsSnap = await getDocs(query(itemsCol(), where('tabId', '==', tabId)));
  const batch = writeBatch(db);
  itemsSnap.docs.forEach((d) => batch.delete(d.ref));
  batch.delete(doc(db, TABS, tabId));
  await batch.commit();
}
