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

  items: OrderItem[];

  totalAmount: number;

  status: string;

  createdAt: string;

  updatedAt: string;
}