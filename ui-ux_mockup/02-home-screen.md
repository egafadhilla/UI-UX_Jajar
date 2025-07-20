# Home Screen - Dashboard Utama

## Overview
Halaman utama aplikasi dengan dashboard lengkap yang menampilkan fitur AI assistant, produk trending, dan berita pasar.

## Design Elements

### Header Section
- **Welcome Message**: "Selamat Datang!" dengan subtitle "Pasar Digital AI"
- **Notification Icon**: Bell icon dengan badge counter (jika ada notifikasi)
- **Search Icon**: Magnifying glass icon
- **Background**: Gradient hijau (green-600 to green-700)

### Search Bar
- **Background**: Semi-transparent white (white/10)
- **Placeholder**: "Cari produk, toko, atau komunitas..."
- **Icons**: Search icon (kiri) dan Bot icon (kanan)
- **Border Radius**: xl (rounded-xl)

### AI Assistant Card
- **Background**: Gradient biru ke ungu (blue-500 to purple-600)
- **Icon**: Bot icon
- **Title**: "AI Market Assistant"
- **Description**: "Dapatkan rekomendasi produk dan analisis harga real-time"
- **CTA Button**: "Mulai Chat" dengan background semi-transparent

### Quick Actions Grid
**Grid 2x1 dengan 2 kartu:**

#### Card 1: Tren Pasar
- **Icon**: TrendingUp (hijau)
- **Title**: "Tren Pasar"
- **Description**: "Analisis harga real-time"

#### Card 2: Chat AI
- **Icon**: MessageCircle (biru)
- **Title**: "Chat AI"
- **Description**: "Konsultasi dengan penjual"

### Trending Products Section
- **Header**: "Produk Trending" dengan link "Lihat Semua"
- **Product Cards** (3 items):
  - Nama produk
  - Harga dengan format Rupiah
  - Nama penjual
  - Trend indicator (badge dengan warna sesuai trend)
  - Heart icon untuk wishlist

### News Feed Section
- **Header**: "Berita & Update" dengan RSS icon
- **News Cards** (3 items):
  - Judul berita
  - Sumber berita
  - Timestamp

## Visual Specifications

### Colors
- **Header Background**: Linear gradient green-600 to green-700
- **Card Background**: White
- **AI Card**: Linear gradient blue-500 to purple-600
- **Trend Positive**: green-100 background, green-600 text
- **Trend Negative**: red-100 background, red-600 text

### Typography
- **Welcome Title**: xl, bold, white
- **Section Headers**: lg, bold, gray-800
- **Product Names**: semibold, gray-800
- **Prices**: bold, green-600
- **Descriptions**: sm, gray-600

### Layout
- **Container Padding**: 1rem (4 spacing units)
- **Card Spacing**: 1.5rem gap between sections
- **Grid**: 2 columns for quick actions
- **Border Radius**: xl untuk semua kartu
- **Shadow**: md untuk kartu

### Interactive Elements
- **Hover States**: Subtle background color changes
- **Active States**: Pressed button appearance
- **Loading States**: Skeleton loaders for content

## User Flow
1. User sees welcome message and notifications
2. Can search for products/stores
3. Access AI assistant
4. View trending products
5. Read latest news
6. Navigate via bottom navigation

## Responsive Design
- **Mobile First**: Optimized untuk layar mobile
- **Touch Targets**: Minimum 44px untuk semua interactive elements
- **Spacing**: Adequate spacing untuk fat finger navigation
