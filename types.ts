export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  rating: number;
  tags: string[];
  priceRange: 'Low' | 'Medium' | 'High' | 'Luxury';
}

export interface Review {
  id: string;
  author: string;
  avatarUrl: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export type LoadingState = 'idle' | 'loading' | 'error';
