import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from './components/Home/Home';
import Feature from './components/Features/Feature';
import About from './components/About/About';
import Menu from './components/menu/Menu';
import Offer from './components/offer/Offer';
import Chef from './components/Chef/Chef';
import Review from './components/Review/Review';
import Blog from './components/blog/Blog';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/review" element={<Review />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
