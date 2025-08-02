# Aplikasi Mobile Marketplace - UI/UX Clean Design

## 📱 Deskripsi Project
Aplikasi mobile marketplace dengan desain clean dan minimalist yang dioptimalkan untuk smartphone. Menggunakan React + TypeScript dengan Vite sebagai build tool dan Tailwind CSS untuk styling.

## 🎨 Design System
- **Primary Color**: Green (#22c55e) - untuk branding dan CTA buttons
- **Typography**: Inter font family untuk readability yang optimal
- **Layout**: Mobile-first responsive design (max-width: 390px)
- **Styling**: Clean card design dengan subtle shadows dan rounded corners

## 🏗️ Struktur Komponen

### 1. Login Screen (`/src/components/Login.tsx`)
- Design clean dengan card putih di center
- Icon smartphone sebagai logo aplikasi
- Form dengan input nomor HP dan password
- Toggle visibility password
- Validasi form real-time

### 2. Home Screen (`/src/components/Home.tsx`)
- Header hijau dengan search bar dan notifications
- Grid kategori dengan icon colorful
- Product cards dengan rating dan harga
- Favorite button pada setiap produk
- Mobile-optimized layout

### 3. Search Screen (`/src/components/SearchScreen.tsx`)
- Search bar dengan filter button
- Recent searches dengan hapus individual/semua
- Trending searches dengan tag design
- Search suggestions saat mengetik

### 4. Bottom Navigation (`/src/components/BottomNavigation.tsx`)
- 5 tab: Home, Search, Cart, Wishlist, Profile
- Badge notification untuk cart
- Smooth animations dan active states
- Fixed position dengan proper mobile spacing

## 🛠️ Teknologi
- **React 18** dengan TypeScript untuk type safety
- **Vite** untuk fast development dan build
- **Tailwind CSS** untuk utility-first styling
- **Lucide React** untuk consistent iconography
- **PostCSS** untuk CSS processing

## 📁 File Structure
```
src/
├── components/
│   ├── Login.tsx           # Login screen
│   ├── Home.tsx            # Home/dashboard screen  
│   ├── SearchScreen.tsx    # Search functionality
│   └── BottomNavigation.tsx # Bottom tab navigation
├── App.tsx                 # Main app component dengan routing logic
├── App.css                 # Additional app styles
├── index.css               # Global styles dengan Tailwind + custom CSS
└── main.tsx                # App entry point
```

## 🎯 Fitur Utama
1. **Authentication Flow**: Login screen dengan validasi
2. **Product Discovery**: Home dengan kategori dan produk featured
3. **Search Experience**: Advanced search dengan history dan trending
4. **Navigation**: Bottom tab navigation yang intuitive
5. **Responsive Design**: Optimized untuk mobile viewport

## 🚀 Development Commands
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Custom CSS Classes
- `.mobile-container`: Container utama dengan max-width mobile
- `.clean-card`: Card design dengan shadow dan border radius
- `.simple-input`: Input field dengan focus states
- `.simple-button`: Button dengan hover effects
- `.product-item`: Product card layout
- `.notification-badge`: Circular badge untuk notifications

## 🎨 Color Palette
```css
Primary Green:
- 50: #f0fdf4  (very light)
- 500: #22c55e (main brand)
- 600: #16a34a (hover state)

Gray Scale:
- 50: #f9fafb
- 100: #f3f4f6  
- 400: #9ca3af
- 600: #4b5563
- 900: #111827
```

## 📱 Responsive Breakpoints
- Mobile First: 320px - 390px (primary target)
- Tablet: 768px+ (planned future enhancement)
- Desktop: 1024px+ (planned future enhancement)

## 🔧 Development Notes
- Semua komponen dibuat dengan TypeScript untuk better type safety
- Custom hooks bisa ditambahkan di folder `/src/hooks` untuk logic reuse
- State management menggunakan React useState (Redux/Zustand bisa ditambah later)
- API integration placeholder sudah disiapkan dengan dummy data

## 🎨 Design Principles
1. **Clean & Minimal**: Fokus pada content, minimize clutter
2. **Intuitive Navigation**: User bisa navigate tanpa confusion
3. **Fast Loading**: Optimized images dan lazy loading
4. **Accessible**: Proper contrast ratios dan semantic HTML
5. **Mobile-First**: Designed untuk touch interaction
