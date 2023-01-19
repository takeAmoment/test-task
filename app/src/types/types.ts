export interface LayoutProps {
  children: JSX.Element;
}

export interface IProduct {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface IResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IProduct[];
}

export interface IProductCardProps {
  item: IProduct;
}

export interface IProductResponse {
  data: IProduct;
}

export interface ProductSliceState {
  product: IProduct | null;
  amountPages: number;
  products: IProduct[];
  error: string | null;
  status: "idle" | "loading" | "failed";
}
