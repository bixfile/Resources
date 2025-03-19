# ReSource Landing Page

Welcome to ReSource - Smart Recycling Made Simple

## About
ReSource is an AI-powered guide to responsible disposal in Berkeley. This landing page showcases our upcoming mobile application that helps users find the right way to recycle any item and schedule pickups effortlessly.

## Features
- Smart item search for recycling guidance
- Easy scheduling for pickups
- Drop-off location finder
- Impact tracking

## Website
Visit our landing page: [ReSource](https://bixfile.github.io/resource-landing)

## Live Demo
The website is live at: https://bixfile.github.io/resource-landing

## Contact
Join our waitlist to get early access and updates!

## Technologies Used

- HTML5
- CSS3 (with CSS Variables and Flexbox/Grid)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (Inter)

## Setup Instructions

1. Clone the repository:
```bash
git clone [repository-url]
cd resource-landing-page
```

2. Replace the Font Awesome kit URL in `index.html` with your own kit URL:
```html
<script src="https://kit.fontawesome.com/your-font-awesome-kit.js" crossorigin="anonymous"></script>
```

3. Add your hero image:
- Place your hero image in the `assets` folder
- Update the image source in `index.html` if needed

4. Serve the files using a local server. You can use Python's built-in server:
```bash
python -m http.server 8000
```

5. Open your browser and navigate to:
```
http://localhost:8000
```

## Project Structure

```
resource-landing-page/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── assets/            # Images and other assets
└── README.md          # Project documentation
```

## Customization

### Colors
The color scheme can be customized by modifying the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2E7D32;
    --primary-light: #4CAF50;
    --primary-dark: #1B5E20;
    --secondary-color: #81C784;
    --text-color: #333333;
    --light-gray: #F5F5F5;
    --white: #FFFFFF;
}
```

### Content
- Update the text content in `index.html`
- Modify the features and benefits sections to match your app's offerings
- Update the partner list in the footer

### Waitlist Form
The waitlist form currently shows a success message. To connect it to a backend:
1. Modify the form submission handler in `script.js`
2. Add your backend API endpoint
3. Implement proper error handling

## Browser Support

The landing page is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact [your-email@example.com] 