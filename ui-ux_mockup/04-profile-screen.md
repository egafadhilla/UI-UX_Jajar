# Profile Screen - User Dashboard

## Overview
Halaman profil pengguna yang menampilkan informasi personal dan akses ke berbagai fitur manajemen akun serta preferensi.

## Design Elements

### Header Section
- **Title**: "Profile Pengguna"
- **Background**: Green-600
- **Typography**: xl bold white text
- **Layout**: Simple header dengan title saja

### User Info Card
- **Layout**: Horizontal flex dengan avatar dan info
- **Background**: White dengan shadow dan border
- **Border Radius**: xl

#### Avatar Section
- **Icon**: User icon dalam circle
- **Background**: Green-100 dengan green-600 icon
- **Size**: 4rem (w-16 h-16)
- **Shape**: Perfect circle

#### User Details
- **Name**: "Budi Santoso" - xl bold text
- **Role/Location**: "Pedagang Pasar Malang" - gray-600 subtitle
- **Typography**: Bold name, regular subtitle

### Feature Cards Grid
**Vertical stack dengan 5 feature cards:**

#### Card 1: Daftar Belanja & To-Do
- **Icon**: List icon (blue-600)
- **Title**: "Daftar Belanja & To-Do"
- **Status**: "5 item pending"
- **Purpose**: Task management dan shopping lists

#### Card 2: Toko Favorit
- **Icon**: Bookmark icon (purple-600)
- **Title**: "Toko Favorit"
- **Status**: "12 toko tersimpan"
- **Purpose**: Saved favorite stores

#### Card 3: Wishlist Produk
- **Icon**: Heart icon (red-600)
- **Title**: "Wishlist Produk"
- **Status**: "8 produk diminati"
- **Purpose**: Product wishlist management

#### Card 4: Follower & Following
- **Icon**: Users icon (green-600)
- **Title**: "Follower & Following"
- **Status**: "Followers: 45 | Following: 23"
- **Purpose**: Social network connections

#### Card 5: Pengaturan
- **Icon**: Settings icon (gray-600)
- **Title**: "Pengaturan"
- **Status**: "Kelola akun dan preferensi"
- **Purpose**: Account settings dan app preferences

## Visual Specifications

### Colors
- **Header Background**: Green-600
- **Card Backgrounds**: White
- **Avatar Background**: Green-100
- **Icon Colors**: 
  - List: Blue-600
  - Bookmark: Purple-600
  - Heart: Red-600
  - Users: Green-600
  - Settings: Gray-600

### Typography
- **Header**: xl, bold, white
- **User Name**: xl, bold, gray-800
- **User Role**: regular, gray-600
- **Card Titles**: semibold, gray-800
- **Card Status**: sm, gray-600
- **Stats Text**: sm, normal

### Layout & Spacing
- **Container Padding**: 1rem
- **Card Spacing**: 1rem vertical gap
- **Card Padding**: 1rem all sides
- **Icon Gap**: 0.75rem dari text
- **Shadow**: md untuk semua cards
- **Border Radius**: xl untuk semua cards

### Interactive Elements
- **Card Hover**: Subtle shadow increase
- **Tap Feedback**: Brief opacity change
- **Navigation**: Each card navigates to respective feature

## Feature Functionality

### Daftar Belanja & To-Do
- **Shopping Lists**: Create dan manage shopping lists
- **Task Management**: To-do items untuk daily activities
- **Reminders**: Notification system untuk pending items
- **Sharing**: Share lists dengan other users

### Toko Favorit
- **Store Bookmarking**: Save favorite stores
- **Store Profiles**: Quick access ke store information
- **Location**: Map integration untuk store locations
- **Reviews**: Access ke store reviews dan ratings

### Wishlist Produk
- **Product Saving**: Save interesting products
- **Price Tracking**: Monitor price changes
- **Availability Alerts**: Notifications ketika product available
- **Comparison**: Compare similar products

### Social Features
- **Follow System**: Follow other users/sellers
- **Activity Feed**: See activities dari followed users
- **Recommendations**: Friend-based product recommendations
- **Community**: Access ke community features

### Pengaturan
- **Account Settings**: Personal information management
- **Privacy Controls**: Privacy preferences
- **Notification Settings**: Customize app notifications
- **AI Preferences**: Configure AI assistant behavior
- **Language**: App language settings
- **Theme**: Dark/light mode toggle

## User Experience Flow
1. User accesses profile dari bottom navigation
2. Views personal information dan stats
3. Selects feature card untuk specific functionality
4. Navigates ke detailed view atau settings
5. Returns ke profile atau navigates elsewhere

## Data Integration

### User Statistics
- **Shopping Activity**: Berapa kali berbelanja, total spending
- **Social Metrics**: Followers/following counts
- **Engagement**: Interaction dengan AI assistant
- **Preferences**: Most viewed categories, favorite stores

### Sync Capabilities
- **Cross-Platform**: Sync dengan web version
- **Backup**: Cloud backup untuk user data
- **Export**: Export data untuk user records
- **Import**: Import dari other platforms

## Privacy & Security
- **Data Control**: User control over data sharing
- **Privacy Settings**: Granular privacy controls
- **Account Security**: Two-factor authentication
- **Data Deletion**: Right to delete account data
