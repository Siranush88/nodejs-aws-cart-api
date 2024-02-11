enum CartStatuses {
  OPEN = 'OPEN',
  STATUS = 'STATUS',
}

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
};

export type ICartItem = {
  product: Product;
  count: number;
};

export type ICart = {
  id?: string;
  user_id?: string;
  created_at?: string;
  updated_at?: string;
  status?: CartStatuses;
  items?: ICartItem[];
};
