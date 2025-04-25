# Auto Parts Website

A test website for an auto parts store, built with React to showcase products, company information, and contact details.

## Project Structure

```
auto-parts-website/
├── public/                    # Static assets
│   ├── favicon.ico            # Website favicon
│   ├── index.html             # HTML entry point
│   └── ...
├── src/                       # Source code
│   ├── assets/                # Images, icons, fonts, etc.
│   ├── components/            # Reusable components
│   │   ├── common/            # Header, Footer, etc.
│   │   ├── home/              # Homepage components
│   │   ├── products/          # Product-related components
│   │   └── forms/             # Form components (e.g., email forms)
│   ├── pages/                 # Page components
│   │   ├── Home.js            # Homepage
│   │   ├── About.js           # About page
│   │   ├── Products.js        # Product listing page
│   │   ├── ProductDetail.js   # Product detail page
│   │   └── Contact.js         # Contact page
│   ├── styles/                # Styling files
│   │   ├── global.css         # Global styles
│   │   └── variables.css      # CSS variables (colors, fonts, etc.)
│   ├── utils/                 # Utility functions
│   ├── data/                  # Static data
│   ├── App.js                 # Main App component
│   ├── index.js               # Application entry point
│   └── ...
└── package.json               # Project dependencies and scripts
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/thswodn1234/auto-parts-website.git
   ```
2. Navigate to the project directory:
   ```bash
   cd auto-parts-website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

### Running the Application
1. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   yarn start
   ```
2. Open your browser and visit `http://localhost:3000`.

### Building for Production
To create a production build:
```bash
npm run build
```
or
```bash
yarn build
```

The optimized build will be generated in the `build/` directory.

## Features
- **Homepage**: Displays featured products and company highlights.
- **About Page**: Provides information about the company.
- **Products Page**: Lists available auto parts with filtering options.
- **Product Detail Page**: Shows detailed information for each product.
- **Contact Page**: Includes a form for customer inquiries.

## Technologies Used
- **React**: Front-end library for building user interfaces.
- **CSS**: Custom styles with global and variable-based styling.
- **JavaScript**: Core logic and utility functions.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add your feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
