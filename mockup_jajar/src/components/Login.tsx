import React, { useState } from 'react';
import { Eye, EyeOff, Smartphone } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic login dummy
    if (phoneNumber && password) {
      onLogin();
    }
  };

  return (
    <div className="mobile-container">
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header kosong untuk clean look */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-sm fade-in">
            {/* Logo/Icon */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                Selamat Datang
              </h1>
              <p className="text-gray-600 text-sm">
                Masuk ke akun Anda untuk melanjutkan
              </p>
            </div>

            {/* Form Login */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="clean-card">
                {/* Input Nomor HP */}
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Handphone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="08xxxxxxxxxx"
                    className="simple-input"
                    required
                  />
                </div>

                {/* Input Password */}
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Kata Sandi
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan kata sandi"
                      className="simple-input pr-12"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Tombol Masuk */}
                <button
                  type="submit"
                  className="simple-button w-full"
                  disabled={!phoneNumber || !password}
                >
                  Masuk
                </button>
              </div>
            </form>

            {/* Link Daftar */}
            <div className="text-center mt-6">
              <p className="text-gray-600 text-sm">
                Belum punya akun?{' '}
                <button className="text-primary-600 font-medium hover:text-primary-700">
                  Daftar Sekarang
                </button>
              </p>
            </div>

            {/* Link Lupa Password */}
            <div className="text-center mt-4">
              <button className="text-gray-500 text-sm hover:text-gray-700">
                Lupa kata sandi?
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 text-center">
          <p className="text-xs text-gray-400">
            Dengan masuk, Anda menyetujui{' '}
            <span className="text-primary-600">Syarat & Ketentuan</span>
            {' '}dan{' '}
            <span className="text-primary-600">Kebijakan Privasi</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
