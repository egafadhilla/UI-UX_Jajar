import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  Home, 
  MessageCircle, 
  Search,
  Bell,
  Menu,
  ShoppingBag,
  Filter,
  Settings,
  Bot,
  Sparkles
} from 'lucide-react';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      setCurrentScreen('home');
    }
  };

  // Login Screen Component
  const LoginScreen = () => (
    <div className="mobile-container gradient-bg">
      <div className="flex flex-col justify-center min-h-screen p-6">
        {/* Logo and Title */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="text-3xl font-bold text-white mb-2">Pasar Digital AI</h1>
          <p className="text-white opacity-80 text-lg">Marketplace Pintar dengan AI</p>
        </div>

        {/* Login Form */}
        <div className="glass-card p-8 mb-6 animate-slide-up">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Masuk</h2>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                className="input-field pl-12"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                required
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="input-field pl-12 pr-12"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-400"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            
            <button type="submit" className="btn-primary w-full">
              Masuk
            </button>
          </form>
          
          <div className="text-center mt-6">
            <button 
              onClick={() => alert('Fitur registrasi akan segera hadir!')}
              className="text-green-600 font-semibold"
            >
              Belum punya akun? Daftar
            </button>
          </div>
        </div>

        {/* AI Assistant Preview */}
        <div className="glass-card p-4 animate-fade-in">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">🤖</div>
            <div>
              <p className="font-semibold text-gray-800">Asisten AI Siap Membantu</p>
              <p className="text-sm text-gray-600">Chat dengan AI untuk rekomendasi produk</p>
            </div>
            <Sparkles className="h-6 w-6 text-yellow-500" />
          </div>
        </div>
      </div>
    </div>
  );

  // Home Screen Component
  const HomeScreen = () => (
    <div className="mobile-container">
      {/* Header */}
      <div className="gradient-bg p-6 pb-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <p className="text-white opacity-80 text-sm">Selamat datang,</p>
              <p className="text-white font-bold">Pengguna</p>
            </div>
          </div>
          <div className="flex space-x-3">
            <div className="relative">
              <Bell className="h-6 w-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
            <Menu className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Cari produk..."
            className="w-full pl-12 pr-4 py-3 bg-white rounded-2xl shadow-lg"
          />
          <Filter className="absolute right-4 top-3.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Welcome Content */}
      <div className="p-6">
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Selamat Datang!</h2>
          <p className="text-gray-600 mb-6">Aplikasi Pasar Digital AI berhasil dimuat</p>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-medium">Server berjalan dengan baik</span>
            </div>
          </div>
        </div>

        {/* Quick Features */}
        <div className="grid grid-cols-2 gap-4 mt-8">
          <button 
            onClick={() => alert('Fitur produk akan segera hadir!')}
            className="glass-card p-4 text-center card-hover"
          >
            <ShoppingBag className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Produk</p>
            <p className="text-sm text-gray-600">Jelajahi produk</p>
          </button>
          
          <button 
            onClick={() => alert('Fitur AI Chat akan segera hadir!')}
            className="glass-card p-4 text-center card-hover"
          >
            <Bot className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">AI Chat</p>
            <p className="text-sm text-gray-600">Bantuan AI</p>
          </button>
          
          <button 
            onClick={() => alert('Fitur profil akan segera hadir!')}
            className="glass-card p-4 text-center card-hover"
          >
            <User className="h-8 w-8 text-purple-500 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Profil</p>
            <p className="text-sm text-gray-600">Akun saya</p>
          </button>
          
          <button 
            onClick={() => alert('Fitur pengaturan akan segera hadir!')}
            className="glass-card p-4 text-center card-hover"
          >
            <Settings className="h-8 w-8 text-gray-500 mx-auto mb-2" />
            <p className="font-semibold text-gray-800">Pengaturan</p>
            <p className="text-sm text-gray-600">Konfigurasi</p>
          </button>
        </div>

        {/* Back to Login */}
        <div className="mt-8 text-center">
          <button 
            onClick={() => setCurrentScreen('login')}
            className="text-green-600 font-semibold underline"
          >
            ← Kembali ke Login
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white border-t border-gray-200 px-6 py-3">
        <div className="flex justify-around">
          <button className="flex flex-col items-center space-y-1 p-2 text-green-600">
            <Home className="h-6 w-6" />
            <span className="text-xs font-medium">Beranda</span>
          </button>
          <button className="flex flex-col items-center space-y-1 p-2 text-gray-400">
            <Search className="h-6 w-6" />
            <span className="text-xs font-medium">Cari</span>
          </button>
          <button className="flex flex-col items-center space-y-1 p-2 text-gray-400">
            <MessageCircle className="h-6 w-6" />
            <span className="text-xs font-medium">Chat AI</span>
          </button>
          <button className="flex flex-col items-center space-y-1 p-2 text-gray-400">
            <User className="h-6 w-6" />
            <span className="text-xs font-medium">Profil</span>
          </button>
        </div>
      </div>

      {/* Floating AI Button */}
      <button 
        onClick={() => alert('Fitur AI Chat akan segera hadir!')}
        className="floating-action"
      >
        <Bot className="h-6 w-6" />
      </button>
    </div>
  );

  // Main Render
  return (
    <div className="min-h-screen bg-gray-50">
      {currentScreen === 'login' && <LoginScreen />}
      {currentScreen === 'home' && <HomeScreen />}
    </div>
  );
}

export default App;
