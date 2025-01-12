import { Property } from './types';

const generateDescription = (type: string, features: string[]) => {
  return `Stunning ${type} featuring ${features.join(', ')}. This property offers luxurious living with modern amenities and exceptional comfort. Perfect for those seeking a premium lifestyle in a prime location.`;
};

export const properties: Property[] = [
  // Original properties with Indian locations
  {
    id: 1,
    title: "Modern Luxury Villa",
    price: 45000000,
    location: "Gurugram, DLF Phase 5",
    bedrooms: 5,
    bathrooms: 4,
    sqft: 4500,
    type: "villa",
    imageUrl: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80",
    description: "Stunning modern villa with panoramic views, featuring an open concept design, gourmet kitchen, and resort-style pool.",
    features: ["Pool", "Smart Home", "Garden", "Garage", "Security System"]
  },
  {
    id: 2,
    title: "Luxury Apartment",
    price: 25000000,
    location: "Mumbai, Bandra West",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 2200,
    type: "apartment",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
    description: "Luxurious apartment with sea view, featuring high-end finishes and a private terrace.",
    features: ["Terrace", "Doorman", "Gym", "Storage", "Parking"]
  },
  {
    id: 3,
    title: "Premium Condo",
    price: 35000000,
    location: "Bengaluru, Whitefield",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    type: "condo",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    description: "Beautiful premium condo with modern amenities and stunning views of the tech park.",
    features: ["Garden View", "Club Access", "Pool", "Fitness Center", "Concierge"]
  },
  {
    id: 4,
    title: "Luxury Lounge & Bar",
    price: 85000000,
    location: "Delhi, Connaught Place",
    bedrooms: 0,
    bathrooms: 4,
    sqft: 3500,
    type: "lounge",
    imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80",
    description: generateDescription("lounge", ["VIP Areas", "Full Bar", "Stage", "Premium Sound System"]),
    features: ["VIP Areas", "Full Bar", "Stage", "Premium Sound System", "Security"]
  },
  {
    id: 5,
    title: "Garden Bungalow",
    price: 55000000,
    location: "Pune, Koregaon Park",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1600,
    type: "bungalow",
    imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80",
    description: generateDescription("bungalow", ["Private Garden", "Modern Kitchen", "Terrace"]),
    features: ["Private Garden", "Modern Kitchen", "Terrace", "Parking", "Security"]
  },
  {
    id: 6,
    title: "Hill View Villa",
    price: 65000000,
    location: "Chandigarh, Sector 8",
    bedrooms: 6,
    bathrooms: 5,
    sqft: 5200,
    type: "villa",
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80",
    description: generateDescription("villa", ["Hill View", "Private Pool", "Home Theater"]),
    features: ["Hill View", "Private Pool", "Home Theater", "Wine Cellar", "Smart Home"]
  },
  {
    id: 7,
    title: "Premium Lounge Club",
    price: 75000000,
    location: "Hyderabad, Jubilee Hills",
    bedrooms: 0,
    bathrooms: 6,
    sqft: 4000,
    type: "lounge",
    imageUrl: "https://images.unsplash.com/photo-1572297794908-f2ee5a2930d6?auto=format&fit=crop&q=80",
    description: generateDescription("lounge", ["Rooftop Access", "DJ Booth", "VIP Section"]),
    features: ["Rooftop Access", "DJ Booth", "VIP Section", "Full Kitchen", "Premium Bar"]
  },
].concat(
  // Generate additional properties programmatically
  Array.from({ length: 43 }, (_, index) => {
    const id = index + 8;
    const types = ['house', 'villa', 'apartment', 'condo', 'bungalow', 'lounge'] as const;
    const type = types[Math.floor(Math.random() * types.length)];
    const locations = [
      "Mumbai, Powai", "Delhi NCR, Noida Sector 62", "Bengaluru, Indiranagar", 
      "Hyderabad, Gachibowli", "Pune, Hinjewadi", "Gurugram, Sector 45", 
      "Noida, Sector 128", "Jaipur, Malviya Nagar", "Mumbai, Andheri West",
      "Delhi NCR, Greater Noida", "Bengaluru, Electronic City", "Hyderabad, Banjara Hills",
      "Pune, Baner", "Gurugram, Sector 57", "Noida, Sector 150",
      "Jaipur, Vaishali Nagar", "Chandigarh, Sector 17", "Mumbai, Worli",
      "Delhi NCR, Dwarka", "Bengaluru, Koramangala"
    ];
    const images = [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
    ];

    const features = [
      ["Pool", "Garden", "Modular Kitchen", "Parking", "24x7 Security"],
      ["Terrace", "Gym", "Power Backup", "Club House", "Children's Play Area"],
      ["Garden View", "Temple", "Community Hall", "Jogging Track", "CCTV"],
      ["Hill View", "Study Room", "Servant Room", "Store Room", "Visitor Parking"],
      ["Rooftop Garden", "Yoga Room", "Party Hall", "Indoor Games", "Library"]
    ];

    const selectedFeatures = features[Math.floor(Math.random() * features.length)];
    const location = locations[Math.floor(Math.random() * locations.length)];
    const bedrooms = type === 'lounge' ? 0 : Math.floor(Math.random() * 6) + 1;
    const price = Math.floor(Math.random() * 50000000) + 15000000;

    return {
      id,
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} in ${location}`,
      price,
      location,
      bedrooms,
      bathrooms: Math.floor(Math.random() * 4) + 1,
      sqft: Math.floor(Math.random() * 3000) + 1000,
      type,
      imageUrl: images[Math.floor(Math.random() * images.length)],
      description: generateDescription(type, selectedFeatures),
      features: selectedFeatures
    };
  })
);