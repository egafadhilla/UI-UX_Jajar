# Bottom Navigation - Global Navigation System

## Overview
Sistem navigasi utama aplikasi yang fixed di bottom screen dengan 5 tab utama untuk akses cepat ke semua fitur utama.

## Design Elements

### Navigation Structure
**5 Tab Navigation dengan icons dan labels:**

#### Tab 1: Home
- **Icon**: Home icon
- **Label**: "Home"
- **Function**: Navigate ke dashboard utama
- **Active State**: Green-600 text dan green-50 background

#### Tab 2: Tren
- **Icon**: TrendingUp icon
- **Label**: "Tren"
- **Function**: Market trends dan analytics
- **Active State**: Green-600 text dan green-50 background

#### Tab 3: Chat
- **Icon**: MessageCircle icon
- **Label**: "Chat"
- **Function**: AI assistant chat interface
- **Active State**: Green-600 text dan green-50 background

#### Tab 4: Rekomendasi
- **Icon**: Star icon
- **Label**: "Rekomendasi"
- **Function**: AI-powered recommendations
- **Active State**: Green-600 text dan green-50 background

#### Tab 5: Profile
- **Icon**: User icon
- **Label**: "Profile"
- **Function**: User profile dan settings
- **Active State**: Green-600 text dan green-50 background

## Visual Specifications

### Container Properties
- **Position**: Fixed bottom-0 left-0 right-0
- **Background**: White
- **Border**: Top border gray-200
- **Z-Index**: High z-index untuk always on top
- **Height**: Auto dengan padding

### Tab Design
- **Layout**: Flex dengan justify-around
- **Padding**: py-2 untuk vertical, px-3 untuk horizontal
- **Border Radius**: lg untuk active state background
- **Transition**: Smooth color transition

### Typography
- **Icon Size**: w-5 h-5 (20px)
- **Label Size**: xs (12px)
- **Label Margin**: mt-1 (4px gap dari icon)
- **Font Weight**: Normal

### Color System

#### Active State
- **Text Color**: Green-600
- **Background**: Green-50
- **Icon Color**: Green-600

#### Inactive State
- **Text Color**: Gray-600
- **Background**: Transparent
- **Icon Color**: Gray-600
- **Hover**: Text-green-600

## Interactive Behavior

### State Management
- **Current Page Tracking**: Active tab highlighted
- **Smooth Transitions**: Fade in/out effects
- **Touch Feedback**: Brief opacity change on tap
- **Visual Feedback**: Immediate state change

### Navigation Flow
1. **User taps tab**: Immediate visual feedback
2. **State Update**: Current page state changes
3. **Content Transition**: Main content area updates
4. **URL Update**: Browser history untuk web version

### Touch Targets
- **Minimum Size**: 44px untuk accessibility
- **Hit Area**: Extends beyond visual bounds
- **Spacing**: Adequate spacing between tabs
- **Fat Finger**: Designed untuk easy thumb navigation

## Responsive Design

### Mobile Optimization
- **Touch-First**: Optimized untuk thumb navigation
- **Screen Sizes**: Scales properly on different devices
- **Orientation**: Works in portrait dan landscape
- **Safe Areas**: Respects device safe areas

### Tablet Adaptation
- **Wider Screens**: Maintains proportions
- **Larger Touch Targets**: Scales appropriately
- **Content Scaling**: Navigation scales dengan content

## Accessibility Features

### Screen Reader Support
- **ARIA Labels**: Proper labeling untuk each tab
- **Role Attributes**: Navigation role defined
- **State Announcement**: Active state announced
- **Focus Management**: Keyboard navigation support

### Visual Accessibility
- **High Contrast**: Sufficient color contrast ratios
- **Focus Indicators**: Clear focus rings
- **Size Standards**: WCAG compliant touch targets
- **Color Independence**: Icons provide meaning without color

### Keyboard Navigation
- **Tab Order**: Logical keyboard navigation
- **Enter/Space**: Activates navigation items
- **Arrow Keys**: Navigate between tabs
- **Escape**: Return to main content

## Technical Implementation

### State Management
```javascript
const [currentPage, setCurrentPage] = useState('home');
```

### Navigation Function
```javascript
const handleNavigation = (pageId) => {
  setCurrentPage(pageId);
  // Additional navigation logic
};
```

### Active State Logic
```javascript
className={`${
  currentPage === item.id 
    ? 'text-green-600 bg-green-50' 
    : 'text-gray-600 hover:text-green-600'
}`}
```

## Performance Considerations

### Rendering Optimization
- **Minimal Re-renders**: Efficient state updates
- **Icon Caching**: Icons loaded once
- **Smooth Animations**: CSS transitions over JavaScript
- **Memory Usage**: Lightweight implementation

### User Experience
- **Instant Feedback**: No loading states untuk navigation
- **Persistent State**: Navigation state maintained
- **Quick Access**: Single tap access ke all major features
- **Visual Hierarchy**: Clear indication of current location

## Future Enhancements

### Potential Additions
- **Badge Notifications**: Notification dots on tabs
- **Gesture Support**: Swipe between tabs
- **Customization**: User-customizable tab order
- **More Tabs**: Additional features as app grows
- **Animation**: More sophisticated transitions
- **Haptic Feedback**: Vibration on tab changes (mobile)
