# Happy Tails Website

A modern, responsive website for Happy Tails - Professional Poop Scooping & Waste Removal Services.

## 🎨 Design Features

- **Clean, friendly design** with vibrant color palette matching the Happy Tails brand
- **Large hero images** and engaging visuals
- **Fully responsive** - works beautifully on all devices
- **Accessibility features** - includes accessibility widget for customization
- **SEO optimized** with proper meta tags and semantic HTML

## 🏗️ Site Structure

### Pages

1. **Homepage** (`index.html`)
   - Hero section with catchy slogan
   - Service overview
   - Why choose us section
   - Clear call-to-action

2. **About Us** (`about.html`)
   - Company mission and history
   - Core values
   - Employment opportunities

3. **Residential Services** (`residential.html`)
   - Service frequency options (weekly, bi-weekly, monthly, custom)
   - One-time service options
   - Pricing information
   - No contracts guarantee

4. **Commercial Services** (`commercial.html`)
   - Services for businesses and organizations
   - Customer types (property managers, hotels, HOAs)
   - Waste station installation and maintenance
   - Special services

5. **Products** (`products.html`)
   - Waste stations, bags, and accessories
   - Product descriptions and pricing
   - Links to ecommerce platform

6. **Blog - The Scoop** (`blog.html`)
   - Tips, tricks, and industry news
   - Category filtering
   - Search functionality
   - Newsletter subscription

7. **Customer Portal** (`customer.html`)
   - Secure login area
   - Service management
   - Account settings
   - Billing and payment

8. **Locations & Quote Request** (`locations.html`)
   - ZIP code location finder
   - Free quote request form
   - Contact information

## 🎨 Color Palette

Based on the Happy Tails logo:
- **Primary Green**: `#1a4d2e` (Dark forest green)
- **Dark Green**: `#0d2818` (Darker green for depth)
- **Gold**: `#d4af37` (Metallic gold accents)
- **Light Gold**: `#f4e4bc` (Subtle gold highlights)

## 🚀 Getting Started

### Local Development

1. Clone or download this repository
2. Open `index.html` in a web browser
3. No build process required - pure HTML, CSS, and JavaScript

### File Structure

```
/
├── index.html              # Homepage
├── about.html              # About Us page
├── residential.html        # Residential Services
├── commercial.html         # Commercial Services
├── products.html           # Products page
├── blog.html              # Blog (The Scoop)
├── customer.html          # Customer Login
├── locations.html         # Locations & Quotes
├── styles.css             # Main stylesheet
├── script.js              # JavaScript functionality
├── README.md              # This file
├── LICENSE                # License file
└── ChatGPT Image...png    # Logo file
```

## ✨ Features

### Navigation
- Persistent top navigation bar
- Mobile-responsive hamburger menu
- Search functionality
- Prominent "Sign Up / Get a Free Quote" button

### Accessibility
- Accessibility widget with options for:
  - High contrast mode
  - Large text
  - Readable font
- ARIA labels for screen readers
- Keyboard navigation support
- Semantic HTML structure

### Interactive Elements
- Mobile menu toggle
- Search modal
- Blog category filtering
- Form validation
- ZIP code location checker
- Customer login portal

## 🔧 Customization

### Updating Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-green: #1a4d2e;
    --dark-green: #0d2818;
    --gold: #d4af37;
    /* ... */
}
```

### Adding Content

- **Blog Posts**: Add new articles in `blog.html` following the existing structure
- **Products**: Update product cards in `products.html`
- **Service Areas**: Modify the service areas section in `locations.html`

### Logo

Replace `ChatGPT Image Dec 16, 2025, 12_59_10 PM.png` with your logo file. Update all references to the logo filename in the HTML files.

## 📱 Mobile Responsiveness

The site is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🔍 SEO Optimization

- Semantic HTML5 elements
- Meta descriptions on all pages
- Proper heading hierarchy
- Alt text for images
- Clean URL structure

## 📊 Analytics Integration

To add analytics tracking:

1. Add your analytics script to each HTML file before the closing `</body>` tag
2. Update the analytics placeholder in `script.js`

Example for Google Analytics:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌐 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your branch (usually `main` or `master`)
4. Your site will be available at `https://username.github.io/repository-name`

### Other Hosting Options

- **Netlify**: Drag and drop the folder or connect your Git repository
- **Vercel**: Connect your repository for automatic deployments
- **Traditional Web Hosting**: Upload files via FTP

## 🔐 Backend Integration

Currently, forms submit to client-side handlers. To integrate with a backend:

1. Update form action attributes to point to your API endpoints
2. Modify form submission handlers in `script.js`
3. Implement authentication for the customer portal
4. Set up email service for quote requests and password resets

## 📝 License

See [LICENSE](LICENSE) file for details.

## 🤝 Contributing

This is a client project. For updates or modifications, please contact the project owner.

## 📞 Support

For questions or issues:
- Email: support@happytails.com
- Phone: (800) 123-4567

## 🎯 Future Enhancements

Potential improvements:
- [ ] Backend API integration
- [ ] Real-time chat support
- [ ] Online payment processing
- [ ] Customer service scheduling
- [ ] Mobile app
- [ ] Multi-language support

---

**Built with ❤️ for Happy Tails**

