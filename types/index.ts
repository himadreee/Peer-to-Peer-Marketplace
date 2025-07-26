export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isSeller: boolean;
  rating?: number;
  reviewCount?: number;
  joinedDate: string;
  bio?: string;
  location?: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  tags: string[];
  sellerId: string;
  seller: User;
  stock: number;
  rating: number;
  reviewCount: number;
  createdAt: string;
  isActive: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  buyerId: string;
  sellerId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  createdAt: string;
  updatedAt: string;
  trackingNumber?: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Review {
  id: string;
  productId: string;
  buyerId: string;
  buyer: User;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: Message;
  unreadCount: number;
}

export const categories = [
  'Jewelry',
  'Home & Living',
  'Clothing',
  'Art & Collectibles',
  'Toys & Games',
  'Craft Supplies',
  'Vintage',
  'Electronics'
] as const;

export type Category = typeof categories[number];