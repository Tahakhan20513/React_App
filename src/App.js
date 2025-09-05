import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Alert from './components/Alert';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import ProductDetail from './components/ProductDetail';
import ContactUs from './components/ContactUs';

function App() {
  const [alertMsg, SetAlert] = useState(null);
  const [mode, setMode] = useState('light');
  const [lable, labletext] = useState("Enable DarkMode");

  const ShowSetAlert = (message, type) => {
    SetAlert({ msg: message, type: type });
    setTimeout(() => SetAlert(null), 2000);
  };

  const toggleModeBtn = () => {
    if (mode === 'light') {
      setMode('dark');
      labletext("Enable LightMode");
      ShowSetAlert("Dark mode enabled", "success");
      document.querySelector('div#root').style.backgroundColor = "rgb(41 53 77)";
    } else {
      setMode('light');
      labletext("Enable DarkMode");
      ShowSetAlert("Light mode enabled", "success");
      document.querySelector('div#root').style.backgroundColor = "white";
    }
  };

  return (
    <Router>
      <div className="app-wrapper">
        <AppContent
          mode={mode}
          toggleModeBtn={toggleModeBtn}
          lable={lable}
          alertMsg={alertMsg}
        />
      </div>
    </Router>
  );
}

function AppContent({ mode, toggleModeBtn, lable, alertMsg }) {
  const location = useLocation();

  return (
    <>
      <Navbar
        title="Accessories"
        about="About us"
        home="Home"
        contact="Contact us"
        mode={mode}
        toggleModeBtn={toggleModeBtn}
        label={lable}
      />

      <Alert alert={alertMsg} />

      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/product" element={<ProductDetail />} />
        </Routes>
      </div>

      {location.pathname !== "/product" && <Footer />}
    </>
  );
}

export default App;
