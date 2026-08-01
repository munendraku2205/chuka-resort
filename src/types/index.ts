export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  capacity: number;
  area: number;
  image: string;
  amenities: string[];
  featured: boolean;
}

export interface Activity {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
  image: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "photos" | "rooms" | "safari" | "restaurant" | "pool" | "wedding" | "night-view";
}

export interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  location: string;
  date: string;
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  includes: string[];
  image: string;
  popular: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
