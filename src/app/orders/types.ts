export interface Order {
  id: string;
  productName: string;
  price: number;
  status: 'Delivered' | 'Refund Completed';
  deliveryDate?: string;
  refundDetails?: {
    refundDate: string;
    refundTime: string;
    refundRef: string;
    refundId: string;
  };
  image: string;
  color?: string;
  size?: string;
}
