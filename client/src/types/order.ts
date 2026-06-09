export interface OrderUser {
  _id: string;

  name: string;

  email: string;
}

export interface OrderItem {
  product: string;

  name: string;

  price: number;

  quantity: number;
}

export interface CreateOrderRequest {
  items: OrderItem[];

  totalAmount: number;
}

export interface Order {
  _id: string;

  user: OrderUser | null;

  items: OrderItem[];

  totalAmount: number;

  status: string;

  createdAt: string;

  updatedAt: string;
}
