export interface CompanyData {
  id: string;
  name: string;
  description: null | string;
  ownerId: string;
  status: string;
  type: string;
  balance: number;
  goal: number;
  timeout: string;
  image: string;
  deletedAt: null | string;
  owner: {
    id: string;
    pubKey: string;
    deletedAt: null | string;
  }
}