export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'food' | 'dessert' | 'mart';
  price: number;
  description: string;
  badge?: string;
  isSpecial?: boolean;
  image?: string;
  tags: string[];
}

export interface Facility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
  iconName: string;
}

export interface CourseSpot {
  name: string;
  desc: string;
  isParadise?: boolean;
  image?: string;
  mapUrl?: string;
}

export interface DriveCourse {
  id: string;
  title: string;
  tag: string;
  duration: string;
  spots: CourseSpot[];
  tip: string;
}

export interface GuestReview {
  id: string;
  author: string;
  city: string;
  date: string;
  rating: number;
  content: string;
  tag: string;
  likes: number;
}

export interface StoreInfo {
  name: string;
  subName: string;
  phone: string;
  address: string;
  addressDetail: string;
  operatingHours: string;
  parkingInfo: string;
  restroomInfo: string;
  notice: string;
  features: string[];
}
