# 📱 Mobile Marketplace App

Aplikasi marketplace mobile dengan desain clean dan modern, dioptimalkan untuk smartphone dengan tampilan yang menarik dan user experience yang intuitif.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-green)
![Vite](https://img.shields.io/badge/Vite-4.4-purple)

## ✨ Features

- 🔐 **Authentication**: Login screen dengan validasi form
- 🏠 **Home Dashboard**: Tampilan produk dengan kategori dan search
- 🔍 **Advanced Search**: Pencarian dengan history dan trending
- 🛒 **Shopping Cart**: Keranjang belanja (in development)
- ❤️ **Wishlist**: Daftar produk favorit (in development)
- 👤 **User Profile**: Profil pengguna (in development)
- 📱 **Mobile-First**: Dioptimalkan untuk smartphone
- 🎨 **Clean Design**: UI/UX yang minimalist dan modern

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 atau lebih baru)
- npm atau yarn

### Installation

1. Clone repository ini:
```bash
git clone [repository-url]
cd mockup_jajar
```

2. Install dependencies:
```bash
npm install
```

3. Jalankan development server:
```bash
npm run dev
```

4. Buka browser ke `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Login.tsx              # Login screen
│   ├── Home.tsx               # Home dashboard  
│   ├── SearchScreen.tsx       # Search functionality
│   └── BottomNavigation.tsx   # Bottom navigation
├── App.tsx                    # Main app component
├── App.css                    # App-specific styles
├── index.css                  # Global Tailwind styles
└── main.tsx                   # Entry point
```

## 🎨 Design System

### Colors
- **Primary**: Green (#22c55e) - Brand color
- **Secondary**: Gray scale untuk text dan backgrounds
- **Accent**: Red untuk notifications (#ef4444)

### Typography
- **Font Family**: Inter, system fonts untuk readability
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite untuk fast development
- **Styling**: Tailwind CSS untuk utility-first design
- **Icons**: Lucide React untuk consistent iconography
- **State**: React hooks (useState, useEffect)

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎯 Roadmap

- [ ] **Shopping Cart**: Implementasi keranjang belanja lengkap
- [ ] **Product Detail**: Halaman detail produk
- [ ] **User Profile**: Profil dan pengaturan user
- [ ] **Payment**: Integrasi payment gateway
- [ ] **Push Notifications**: Real-time notifications
- [ ] **Offline Support**: PWA capabilities

---

⭐ Jika project ini helpful, jangan lupa berikan star di GitHub!
