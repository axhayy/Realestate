import { X, Bed, Bath, Square, MapPin, DollarSign, Check } from 'lucide-react';
import { Property } from '../types';

interface PropertyDetailsProps {
  property: Property;
  onClose: () => void;
}

export function PropertyDetails({ property, onClose }: PropertyDetailsProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg z-10 hover:bg-gray-100"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={property.imageUrl}
            alt={property.title}
            className="w-full h-48 sm:h-64 md:h-[400px] object-cover"
          />
        </div>
        
        <div className="p-4 sm:p-6 md:p-8">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-5 h-5 text-gray-500 flex-shrink-0" />
            <span className="text-base sm:text-lg text-gray-600">{property.location}</span>
          </div>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4">{property.title}</h2>
          
          <div className="flex items-center gap-3 mb-6">
            <DollarSign className="w-6 h-6 text-green-600 flex-shrink-0" />
            <span className="text-xl sm:text-2xl font-bold text-green-600">
              {formatPrice(property.price)}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Bed className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              <div>
                <p className="text-base sm:text-lg font-semibold">{property.bedrooms}</p>
                <p className="text-xs sm:text-sm text-gray-600">Bedrooms</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Bath className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              <div>
                <p className="text-base sm:text-lg font-semibold">{property.bathrooms}</p>
                <p className="text-xs sm:text-sm text-gray-600">Bathrooms</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Square className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
              <div>
                <p className="text-base sm:text-lg font-semibold">{property.sqft}</p>
                <p className="text-xs sm:text-sm text-gray-600">Square Feet</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Description</h3>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{property.description}</p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4">Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {property.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}