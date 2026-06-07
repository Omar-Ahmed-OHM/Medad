export interface Hadith {
  _id: string;
  id: number;
  title: string;
  text: string;
  explanation: string;
  benefits: string;
  grade: string;
  takhrij: string;
  link: string;
  createdAt: string;
  updatedAt: string;
}

export interface HadithResponse {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  data: Hadith[];
}