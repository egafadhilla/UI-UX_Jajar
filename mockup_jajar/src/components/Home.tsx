import React, { useState } from 'react';
import { Search, Bell, MapPin, Grid3X3, Package, Star, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  soldCount: number;
  category: string;
  isFavorite?: boolean;
}

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [notificationCount] = useState(3);

  // Data produk dummy
  const featuredProducts: Product[] = [
    {
      id: 1,
      name: 'Sepatu Sneakers Premium',
      price: 299000,
      originalPrice: 399000,
      image: '/api/placeholder/150/150',
      rating: 4.8,
      soldCount: 127,
      category: 'Fashion'
    },
    {
      id: 2,
      name: 'Tas Ransel Laptop',
      price: 159000,
      image: '/api/placeholder/150/150',
      rating: 4.6,
      soldCount: 89,
      category: 'Elektronik'
    },
    {
      id: 3,
      name: 'Kemeja Formal Pria',
      price: 125000,
      originalPrice: 175000,
      image: '/api/placeholder/150/150',
      rating: 4.7,
      soldCount: 203,
      category: 'Fashion'
    },
    {
      id: 4,
      name: 'Power Bank 20000mAh',
      price: 89000,
      image: '/api/placeholder/150/150',
      rating: 4.9,
      soldCount: 341,
      category: 'Elektronik'
    }
  ];

  const categories = [
    { icon: Grid3X3, label: 'Semua', color: 'bg-primary-100 text-primary-600' },
    { icon: Package, label: 'Fashion', color: 'bg-blue-100 text-blue-600' },
    { icon: Package, label: 'Elektronik', color: 'bg-purple-100 text-purple-600' },
    { icon: Package, label: 'Rumah', color: 'bg-orange-100 text-orange-600' },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="mobile-container">
      <div className="min-h-screen bg-gray-50">
        {/* Header dengan background hijau */}
        <div className="bg-primary-500 text-white p-4 pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <div>
                <p className="text-xs opacity-80">Dikirim ke</p>
                <p className="text-sm font-medium">Jakarta Selatan</p>
              </div>
            </div>
            <div className="relative">
              <Bell className="w-6 h-6" />
              {notificationCount > 0 && (
                <span className="notification-badge">
                  {notificationCount}
                </span>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Cari produk, toko, atau brand"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-20"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-4 -mt-2">
          {/* Categories */}
          <div className="clean-card mb-4 fade-in">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Kategori</h2>
            <div className="grid grid-cols-4 gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mb-2`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-gray-700 font-medium text-center">
                    {category.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Featured Products */}
          <div className="clean-card fade-in">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Produk Pilihan</h2>
              <button className="text-primary-600 text-sm font-medium">
                Lihat Semua
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {featuredProducts.map((product) => (
                <div key={product.id} className="product-item relative group">
                  {/* Favorite Button */}
                  <button className="absolute top-2 right-2 z-10 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50">
                    <Heart className={`w-4 h-4 ${product.isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
                  </button>

                  {/* Product Image */}
                  <div className="w-full h-32 bg-gray-100 rounded-lg mb-3 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik03NSA2MEMzNy4xIDYwIDMwIDU3IDMwIDc1VjEyMEgxMjBWNzVDMTIwIDU3IDExMi45IDYwIDc1IDYwWiIgZmlsbD0iI0Q5REREQSIvPgo8L3N2Zz4K';
                      }}
                    />
                  </div>

                  {/* Product Info */}
                  <div>
                    <h3 className="font-medium text-gray-900 text-sm leading-tight mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center mb-2">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-gray-600 ml-1">
                        {product.rating} • {product.soldCount} terjual
                      </span>
                    </div>

                    <div className="flex items-center space-x-1">
                      <span className="font-bold text-primary-600 text-sm">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom padding for navigation */}
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
