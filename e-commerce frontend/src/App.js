import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";

import ShopCategory from "./Pages/ShopCategory";
import men_banner from "./Components/Assets/banner_mens.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import LoginSignup from "./Pages/LoginSignup";

function App() {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
      
           
          
          <Route path="/cart" element={<Cart />} />
        
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
