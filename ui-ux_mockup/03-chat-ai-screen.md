# Chat AI Assistant Screen

## Overview
Halaman chat dengan AI assistant yang terintegrasi dengan N8N dan sistem AI agent untuk memberikan bantuan real-time kepada pengguna.

## Design Elements

### Header Section
- **Title**: "AI Chat Assistant"
- **Subtitle**: "Powered by N8N & AI Agent"
- **Background**: Solid green-600
- **Typography**: xl bold title, light green subtitle

### Chat Container
- **Height**: Fixed height dengan scroll
- **Background**: Light gray/white
- **Padding**: 1rem all sides
- **Overflow**: Auto scroll untuk pesan panjang

### Message Bubbles

#### AI Assistant Messages (Left Aligned)
- **Avatar**: Bot icon dalam circle dengan background biru muda
- **Bubble Background**: Gray-100
- **Text Color**: Dark gray/black
- **Max Width**: 75% dari container
- **Border Radius**: xl dengan slight asymmetry
- **Content Types**:
  - Welcome message
  - Feature list (bullet points)
  - Predictions dan analysis

#### User Messages (Right Aligned)
- **Bubble Background**: Green-600
- **Text Color**: White
- **Max Width**: 75% dari container
- **Border Radius**: xl dengan slight asymmetry
- **Alignment**: Right side

### Message Input Section
- **Position**: Fixed di bottom (above bottom navigation)
- **Background**: White dengan border top
- **Layout**: Flex horizontal

#### Input Field
- **Placeholder**: "Ketik pesan Anda..."
- **Border**: Gray-300 dengan focus state green-500
- **Border Radius**: xl
- **Padding**: 0.75rem

#### Send Button
- **Background**: Green-600
- **Icon**: MessageSquare
- **Shape**: Square dengan rounded corners
- **Size**: Same height sebagai input

### Quick Action Buttons
- **WhatsApp Integration**: Blue-500 background dengan Phone icon
- **Telegram Integration**: Blue-400 background dengan MessageCircle icon
- **Layout**: Horizontal flex dengan gap
- **Typography**: xs text dengan icon

## AI Assistant Capabilities Display

### Welcome Message Features List
1. **Analisis harga pasar** - Real-time market price analysis
2. **Rekomendasi produk** - AI-powered product recommendations
3. **Prediksi trend** - Market trend predictions
4. **Koneksi dengan penjual** - Direct seller connections

### Sample Conversation Flow
1. **AI Greeting**: Welcome message dengan feature overview
2. **User Query**: "Bagaimana prediksi harga cabai minggu depan?"
3. **AI Response**: Detailed prediction dengan data sources

## Visual Specifications

### Colors
- **Header**: Green-600
- **AI Messages**: Gray-100 background
- **User Messages**: Green-600 background
- **Input Border**: Gray-300, focus Green-500
- **WhatsApp Button**: Blue-500
- **Telegram Button**: Blue-400

### Typography
- **Header Title**: xl, bold, white
- **Message Text**: sm, readable line height
- **Button Text**: xs, semibold
- **Placeholder**: gray-500

### Layout & Spacing
- **Message Spacing**: 1rem vertical gap
- **Avatar Gap**: 0.75rem dari message bubble
- **Input Padding**: 1rem all sides
- **Button Gap**: 0.5rem between quick actions

### Interactive States
- **Input Focus**: Ring-2 ring-green-500
- **Button Hover**: Slight opacity change
- **Send Button**: Hover darkens background
- **Message Delivery**: Typing indicators (future enhancement)

## Integration Points

### N8N Workflow Integration
- **Message Processing**: AI responses melalui N8N workflows
- **External APIs**: RSS feeds, market data, weather data
- **Response Formatting**: Structured responses dari AI agent

### Multi-Platform Messaging
- **WhatsApp API**: Deep linking ke WhatsApp chat
- **Telegram Bot**: Integration dengan Telegram channels
- **SMS Gateway**: Backup communication method

## User Experience Flow
1. User enters chat screen
2. Sees AI welcome message dengan capabilities
3. Types question atau pilih quick action
4. Receives AI response dengan actionable insights
5. Can continue conversation atau switch platforms
6. Access external messaging platforms jika diperlukan

## Accessibility Features
- **Screen Reader**: Alt text untuk semua icons
- **Keyboard Navigation**: Tab-friendly navigation
- **High Contrast**: Sufficient color contrast ratios
- **Touch Targets**: 44px minimum untuk mobile
