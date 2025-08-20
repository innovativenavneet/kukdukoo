# Kuk Du Koo Fest - Children's Literature Festival

A modern, responsive website for the Kuk Du Koo Fest children's literature and arts festival, built with vanilla JavaScript using MVC architecture and Vite.

## 🎯 Project Overview

This is a static website for a children's festival featuring:
- **Home Page**: Hero section with ticket booking, activities showcase, FAQ, and upcoming cities
- **Info Page**: Detailed festival information and logistics
- **Activities Page**: Comprehensive list of all festival activities
- **Tickets Page**: Complete ticket booking system with cart functionality

## 🏗️ Architecture

The project follows the **MVC (Model-View-Controller)** pattern:

### 📁 Project Structure
```
kukdukoo/
├── src/
│   ├── index.html              # Main HTML file
│   ├── js/
│   │   ├── main.js             # Application entry point
│   │   ├── controllers/        # MVC Controllers
│   │   │   ├── Router.js       # Navigation controller
│   │   │   ├── HeaderController.js
│   │   │   ├── FooterController.js
│   │   │   ├── HomeController.js
│   │   │   ├── InfoController.js
│   │   │   ├── ActivitiesController.js
│   │   │   └── TicketsController.js
│   │   ├── views/              # MVC Views
│   │   │   ├── HeaderView.js
│   │   │   ├── FooterView.js
│   │   │   ├── HomeView.js
│   │   │   ├── InfoView.js
│   │   │   ├── ActivitiesView.js
│   │   │   └── TicketsView.js
│   │   └── models/             # MVC Models (future expansion)
│   ├── styles/
│   │   └── main.css            # Main stylesheet
│   └── assets/
│       └── images/             # Image assets
├── package.json
├── vite.config.js
└── README.md
```

### 🔧 MVC Implementation

**Controllers**: Handle business logic, event listeners, and data manipulation
- `Router.js`: Manages navigation between pages
- `HomeController.js`: Manages home page interactions
- `TicketsController.js`: Handles ticket selection and cart functionality

**Views**: Render HTML templates and UI components
- Each view class has a `render()` method that returns HTML
- Views are responsible for the presentation layer

**Models**: Data layer (ready for future expansion)
- Currently using simple data structures
- Can be extended with API calls or local storage

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd kukdukoo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The development server will start at `http://localhost:3000`
   - The browser should open automatically

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Light Blue (#87CEEB) and Light Green (#98FB98)
- **Accent**: Red (#FF6B6B) for CTAs and highlights
- **Success**: Green (#4CAF50) for positive actions
- **Background**: Light blue gradient (#f0f8ff)

### Typography
- **Font Family**: Arial, sans-serif
- **Headings**: Bold, large sizes for impact
- **Body Text**: Clean, readable line heights

### Interactive Elements
- **Buttons**: Rounded corners, hover effects, smooth transitions
- **Cards**: Shadow effects, hover animations
- **Navigation**: Smooth page transitions without reload

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

### Mobile Optimizations
- Stacked layouts for better mobile viewing
- Touch-friendly button sizes
- Optimized navigation for mobile devices

## 🔧 Key Features

### 1. Single Page Application (SPA)
- No page reloads when navigating
- Smooth transitions between sections
- Browser history support

### 2. Ticket Booking System
- Interactive ticket selection
- Real-time cart updates
- Quantity controls
- Price calculations

### 3. FAQ Accordion
- Expandable/collapsible questions
- Smooth animations
- Accessible keyboard navigation

### 4. Activity Showcase
- Grid layout for activities
- Hover effects and animations
- Detailed activity information

### 5. Responsive Navigation
- Sticky header
- Mobile-friendly navigation
- Active state indicators

## 🛠️ Development

### Adding New Pages

1. **Create Controller**
   ```javascript
   // src/js/controllers/NewPageController.js
   import { NewPageView } from '../views/NewPageView.js';
   
   export class NewPageController {
       constructor() {
           this.view = new NewPageView();
       }
       
       render() {
           const mainElement = document.getElementById('main');
           mainElement.innerHTML = this.view.render();
           this.addEventListeners();
       }
       
       addEventListeners() {
           // Add page-specific event listeners
       }
   }
   ```

2. **Create View**
   ```javascript
   // src/js/views/NewPageView.js
   export class NewPageView {
       render() {
           return `
               <section class="new-page">
                   <div class="page-container">
                       <div class="page-header">
                           <h1>New Page</h1>
                       </div>
                       <!-- Page content -->
                   </div>
               </section>
           `;
       }
   }
   ```

3. **Add to Router**
   ```javascript
   // In src/js/controllers/Router.js
   import { NewPageController } from './NewPageController.js';
   
   // Add to routes object
   this.routes = {
       '/': HomeController,
       '/new-page': NewPageController,
       // ... other routes
   };
   ```

### Styling Guidelines

- Use CSS custom properties for consistent theming
- Follow BEM methodology for class naming
- Maintain responsive design principles
- Use CSS Grid and Flexbox for layouts

## 📦 Dependencies

- **Vite**: Build tool and development server
- **Vanilla JavaScript**: No framework dependencies
- **CSS3**: Modern styling with gradients and animations

## 🚀 Deployment

The project can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist/` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Deploy from the `dist/` branch
- **AWS S3**: Upload `dist/` contents to S3 bucket

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🎉 Features to Come

- [ ] Image optimization and lazy loading
- [ ] Service worker for offline support
- [ ] Advanced form validation
- [ ] Payment gateway integration
- [ ] Admin panel for content management
- [ ] Multi-language support
- [ ] Accessibility improvements
- [ ] Performance optimizations

---

**Built with ❤️ for children's literature and arts festivals**
