import { CompanyData } from './companyData';

export interface Companies {
  data: [CompanyData],
  meta: {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
    sortBy: any
  },
  links: {
    current: string;
  }
}
