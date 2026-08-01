import { Package } from "@/types";

export const packages: Package[] = [
  {
    id: "1",
    name: "Weekend Escape",
    description: "Perfect 2-night getaway with room, meals, and one activity included.",
    price: 14999,
    duration: "2 Nights / 3 Days",
    includes: ["Deluxe Room", "All Meals", "Swimming Pool", "Bonfire Night", "Nature Walk", "Parking"],
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    popular: true,
  },
  {
    id: "2",
    name: "Adventure Package",
    description: "Thrilling 3-night adventure with safari, cycling, and outdoor activities.",
    price: 24999,
    duration: "3 Nights / 4 Days",
    includes: ["Premium Room", "All Meals", "Jungle Safari", "Cycling Trail", "Bird Watching", "Bonfire", "DJ Night"],
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
    popular: true,
  },
  {
    id: "3",
    name: "Honeymoon Special",
    description: "Romantic escape with luxury suite, spa treatments, and intimate dining experiences.",
    price: 35999,
    duration: "3 Nights / 4 Days",
    includes: ["Honeymoon Suite", "Candlelit Dinners", "Couple Spa", "Pool Villa Access", "Photography Session", "Champagne"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    popular: true,
  },
  {
    id: "4",
    name: "Family Fun Pack",
    description: "Action-packed family vacation with activities for all ages and comfortable stays.",
    price: 29999,
    duration: "2 Nights / 3 Days",
    includes: ["Family Suite", "All Meals", "Kids Zone", "Swimming Pool", "Rain Dance", "Nature Walk", "Cycling"],
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    popular: false,
  },
];
