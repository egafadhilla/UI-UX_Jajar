import React from 'react';
import { Home, Search, ShoppingCart, Heart, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const BottomNavigation: React.FC<BottomNavProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    {
      id: 'home',
      label: 'Beranda',
      icon: Home,
    },
    {
      id: 'search',
      label: 'Cari',
      icon: Search,
    },
    {
      id: 'cart',
      label: 'Keranjang',
      icon: ShoppingCart,
      badge: 2, // Jumlah item di keranjang
    },
    {
      id: 'wishlist',
      label: 'Wishlist',
      icon: Heart,
    },
    {
      id: 'profile',
      label: 'Profil',
      icon: User,
    },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 slide-up">
      <div className="flex items-center justify-around py-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const IconComponent = tab.icon;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center py-2 px-3 min-w-0 flex-1 relative transition-all duration-200 ${
                isActive 
                  ? 'text-primary-600' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              {/* Icon with badge */}
              <div className="relative mb-1">
                <IconComponent 
                  className={`w-6 h-6 transition-all duration-200 ${
                    isActive ? 'scale-110' : 'scale-100'
                  }`}
                />
                {tab.badge && tab.badge > 0 && (
                  <span className="notification-badge">
                    {tab.badge > 99 ? '99+' : tab.badge}
                  </span>
                )}
              </div>
              
              {/* Label */}
              <span 
                className={`text-xs font-medium transition-all duration-200 ${
                  isActive ? 'opacity-100' : 'opacity-70'
                }`}
              >
                {tab.label}
              </span>
              
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary-600 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
