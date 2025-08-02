import { useState } from 'react';
import Login from './components/Login';
import Home from './components/Home';
import SearchScreen from './components/SearchScreen';
import BottomNavigation from './components/BottomNavigation';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  // Untuk demo, bisa toggle login state
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'search':
        return <SearchScreen />;
      case 'cart':
        return <div className="mobile-container flex items-center justify-center min-h-screen bg-gray-50">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Keranjang Belanja</h2>
            <p className="text-gray-500">Fitur keranjang akan segera hadir</p>
          </div>
        </div>;
      case 'wishlist':
        return <div className="mobile-container flex items-center justify-center min-h-screen bg-gray-50">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Wishlist</h2>
            <p className="text-gray-500">Fitur wishlist akan segera hadir</p>
          </div>
        </div>;
      case 'profile':
        return <div className="mobile-container flex items-center justify-center min-h-screen bg-gray-50">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Profil</h2>
            <p className="text-gray-500 mb-4">Fitur profil akan segera hadir</p>
            <button 
              onClick={toggleLogin}
              className="simple-button"
            >
              {isLoggedIn ? 'Logout' : 'Login Demo'}
            </button>
          </div>
        </div>;
      default:
        return <Home />;
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="App">
        <Login onLogin={() => setIsLoggedIn(true)} />
        {/* Demo button untuk skip login */}
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={toggleLogin}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg text-sm opacity-70 hover:opacity-100"
          >
            Skip Login (Demo)
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      {renderActiveScreen()}
      <BottomNavigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
      />
    </div>
  );
}

export default App;
