export interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  type: 'house' | 'villa' | 'apartment' | 'condo' | 'bungalow' | 'lounge';
  imageUrl: string;
  description: string;
  features: string[];
}