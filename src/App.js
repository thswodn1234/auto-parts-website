import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 페이지 임포트
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';

// 공통 컴포넌트 임포트
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';

import './styles/global.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Header />
        <main>
          Hello World
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;