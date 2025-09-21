// destinationモデルを作成してください
export interface Destination {
  id: string;
  headTitle: string;
  title: string;
  description: string;
  imageUrl: string;
  contentType: number;
  benefitsNum: number;
  benefitsOne: string;
  benefitsTwo: string;
  order: number;
  link?: string;
}