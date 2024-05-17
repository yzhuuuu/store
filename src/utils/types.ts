import hero1 from '../assets/1.jpg';
import hero2 from '../assets/2.jpg';
import hero3 from '../assets/3.jpg';
import hero4 from '../assets/4.jpg';
import hero5 from '../assets/5.jpg';

type Types = {
  text: string;
  href: string;
};

export const links: Types[] = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About',
    href: '/about',
  },
  {
    text: 'Products',
    href: '/products',
  },
  {
    text: 'Cart',
    href: '/cart',
  },
];
export const themes: string[] = ['light', 'dark', 'system'];

export type Theme = 'dark' | 'light' | 'system';

export type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export const imageLinks: string[] = [hero1, hero2, hero3, hero4, hero5];

export type ProductTypes = {
  id: number;
  attributes: {
    title: string;
    company: string;
    description: string;
    featured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    category: string;
    image: string;
    price: string;
    shipping: boolean;
    colors: string[];
  };
  amount?: number;
  currentColor?: string;
};
export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};
export type MetaTypes = {
  categories: string[];
  companies: string[];
  pagination: Pagination;
};
export type ProductsType = {
  data: ProductTypes[];
  meta: MetaTypes;
};
export const formatAsDollars = (price: string | number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(Number(price) / 100);
};
export type Params = {
  search?: string;
  category?: string;
  order?: string;
  company?: string;
};
