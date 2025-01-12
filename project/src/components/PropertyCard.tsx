import { Home, Bed, Bath, Square, MapPin, DollarSign } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  property: Property;
  onClick: (property: Property) => void;
}

export function PropertyCard({ property, onClick }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
      onClick={() => onClick(property)}
    >
      <div className="relative h-48 sm:h-56 md:h-64">
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
          <span className="text-sm font-semibold text-gray-800">{property.type}</span>
        </div>
      </div>
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
          <span className="text-sm text-gray-600 truncate">{property.location}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">{property.title}</h3>
        <div className="flex items-center gap-2 mb-4">
          <DollarSign className="w-5 h-5 text-green-600 flex-shrink-0" />
          <span className="text-lg sm:text-xl font-bold text-green-600">{formatPrice(property.price)}</span>
        </div>
        <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t pt-4">
          <div className="flex items-center gap-1 sm:gap-2">
            <Bed className="w-4 h-4 text-gray-500" />
            <span className="text-xs sm:text-sm text-gray-600">{property.bedrooms} beds</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Bath className="w-4 h-4 text-gray-500" />
            <span className="text-xs sm:text-sm text-gray-600">{property.bathrooms} baths</span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2">
            <Square className="w-4 h-4 text-gray-500" />
            <span className="text-xs sm:text-sm text-gray-600">{property.sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
}