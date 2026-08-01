export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  offer: string;
  cta: string;
  image: string;
  gradient: string;
}

export const banners: Banner[] = [
  {
    id: "1",
    title: "Weekend Escape",
    subtitle: "Book Your Stay Today",
    offer: "25% OFF",
    cta: "Book Now",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    gradient: "from-emerald-900/80 to-emerald-700/60",
  },
  {
    id: "2",
    title: "Luxury Pool Villa",
    subtitle: "Book 2 Nights, Get Breakfast Free",
    offer: "FREE MEALS",
    cta: "Explore",
    image: "https://images.unsplash.com/photo-1572331165267-854da2b021b1?w=600&q=80",
    gradient: "from-blue-900/80 to-cyan-700/60",
  },
  {
    id: "3",
    title: "Rain Dance Festival",
    subtitle: "Every Saturday • Live DJ",
    offer: "THIS SAT",
    cta: "Join Now",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&q=80",
    gradient: "from-purple-900/80 to-pink-700/60",
  },
  {
    id: "4",
    title: "Jungle Safari Package",
    subtitle: "Safari + Stay + Food",
    offer: "₹4999",
    cta: "Book Safari",
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=600&q=80",
    gradient: "from-amber-900/80 to-orange-700/60",
  },
  {
    id: "5",
    title: "Family Vacation",
    subtitle: "Kids Stay Free",
    offer: "FAMILY DEAL",
    cta: "View Details",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",
    gradient: "from-teal-900/80 to-green-700/60",
  },
  {
    id: "6",
    title: "Wedding Destination",
    subtitle: "Luxury Lawn • Special Discount",
    offer: "30% OFF",
    cta: "Plan Wedding",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
    gradient: "from-rose-900/80 to-pink-700/60",
  },
  {
    id: "7",
    title: "Birthday Celebration",
    subtitle: "Free Decoration Included",
    offer: "FREE DECOR",
    cta: "Celebrate",
    image: "https://images.unsplash.com/photo-1475483768296-6163e8f3e3b0?w=600&q=80",
    gradient: "from-indigo-900/80 to-violet-700/60",
  },
];
