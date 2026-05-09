import { Timestamp } from 'firebase/firestore';

export interface PresentTab {
  id: string;
  name: string;
  cautionText: string;
  order: number;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export interface PresentCategory {
  id: string;
  tabId: string;
  name: string;
  cautionText: string;
  order: number;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export const PRESENT_ITEM_MAX_IMAGES = 10;

export interface PresentItem {
  id: string;
  tabId: string;
  categoryId: string;
  title: string;
  detail: string;
  images: string[];
  order: number;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export type PresentTabInput = Omit<PresentTab, 'id' | 'createdAt' | 'updatedAt'>;
export type PresentCategoryInput = Omit<PresentCategory, 'id' | 'createdAt' | 'updatedAt'>;
export type PresentItemInput = Omit<PresentItem, 'id' | 'createdAt' | 'updatedAt'>;

export const ADMIN_EMAIL = 'yukimidaifuku0405@gmail.com';
