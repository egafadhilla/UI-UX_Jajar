import React, { useState } from 'react';
import { Search, Clock, X, TrendingUp, Filter } from 'lucide-react';

const SearchScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([
    'sepatu sneakers',
    'tas laptop',
    'kemeja formal',
    'power bank'
  ]);

  const trendingSearches = [
    'sepatu olahraga',
    'smartphone gaming',
    'jaket hoodie',
    'headphone wireless',
    'tas ransel',
    'kacamata sunglasses'
  ];

  const removeRecentSearch = (index: number) => {
    setRecentSearches(prev => prev.filter((_, i) => i !== index));
  };

  const clearAllRecentSearches = () => {
    setRecentSearches([]);
  };

  const handleSearch = (query: string) => {
    if (query.trim()) {
      // Add to recent searches if not already exists
      if (!recentSearches.includes(query.trim())) {
        setRecentSearches(prev => [query.trim(), ...prev.slice(0, 9)]);
      }
      setSearchQuery(query);
      // TODO: Implement actual search functionality
      console.log('Searching for:', query);
    }
  };

  return (
    <div className="mobile-container">
      <div className="min-h-screen bg-gray-50">
        {/* Header dengan Search Bar */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cari produk, toko, atau brand"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch(searchQuery);
                  }
                }}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <button className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <Filter className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div className="clean-card mb-4 fade-in">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-gray-600" />
                  <h2 className="text-lg font-semibold text-gray-900">Pencarian Terakhir</h2>
                </div>
                <button
                  onClick={clearAllRecentSearches}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Hapus Semua
                </button>
              </div>
              
              <div className="space-y-2">
                {recentSearches.map((search, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <button
                      onClick={() => handleSearch(search)}
                      className="flex-1 text-left text-gray-700 hover:text-gray-900"
                    >
                      {search}
                    </button>
                    <button
                      onClick={() => removeRecentSearch(index)}
                      className="opacity-0 group-hover:opacity-100 p-1 text-gray-400 hover:text-gray-600 transition-all"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Trending Searches */}
          <div className="clean-card fade-in">
            <div className="flex items-center space-x-2 mb-3">
              <TrendingUp className="w-5 h-5 text-primary-600" />
              <h2 className="text-lg font-semibold text-gray-900">Pencarian Trending</h2>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {trendingSearches.map((trend, index) => (
                <button
                  key={index}
                  onClick={() => handleSearch(trend)}
                  className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium hover:bg-primary-100 transition-colors"
                >
                  {trend}
                </button>
              ))}
            </div>
          </div>

          {/* Search Suggestions - Only show when typing */}
          {searchQuery && (
            <div className="clean-card mt-4 fade-in">
              <h3 className="text-md font-semibold text-gray-900 mb-3">Saran Pencarian</h3>
              <div className="space-y-2">
                {[
                  `${searchQuery} murah`,
                  `${searchQuery} original`,
                  `${searchQuery} terbaru`,
                  `${searchQuery} berkualitas`
                ].map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(suggestion)}
                    className="flex items-center w-full p-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <Search className="w-4 h-4 text-gray-400 mr-3" />
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Bottom padding for navigation */}
          <div className="h-20"></div>
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
