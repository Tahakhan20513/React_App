import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Alert from './components/Alert';
import Footer from './components/Footer';

import SearchResults from './components/SearchResults';
import ProductDetail from './components/ProductDetail';

function App() {

  const [alertMsg, SetAlert] = useState(null);

  const ShowSetAlert = (message,type)=>{
    SetAlert({
      msg: message,
      type: type
    });

    setTimeout(() => SetAlert(null), 2000);

  }

  const [mode,setMode] = useState('light');
  const [lable,labletext]= useState("Enable DarkMode");
    const toggleModeBtn = ()=>{
      if (mode === 'light') {
        setMode('dark');
        labletext("Enable LightMode");
        ShowSetAlert("Dark mode enabled","success");
        document.querySelector('div#root').style.backgroundColor = "rgb(41 53 77)";
        document.querySelectorAll('.text-secondary').forEach(el => {
          el.style.setProperty("color", "black", "important");
        });
        //document.querySelector('.lead').style.color = "black";
         const lead = document.querySelector('.lead');
         if (lead) lead.style.color = "black";
       // document.querySelector('.text-muted').style.setProperty("color", "black", "important");
         const textMuted = document.querySelector('.text-muted');
        if (textMuted) textMuted.style.setProperty("color", "black", "important");  

       }
      else{
        setMode('light');
        labletext("Enable DarkMode");
        ShowSetAlert("Light mode enabled","success");
        document.querySelector('div#root').style.backgroundColor = "white";
        document.querySelectorAll('.text-secondary').forEach(el => {
          el.style.setProperty("color", "#6c757d", "important");
        });
        //document.querySelector('.lead').style.color = "#6c757d";
          const lead = document.querySelector('.lead');
        if (lead) lead.style.color = "#6c757d";
        //document.querySelector('.text-muted').style.color = "#6c757d";
         const textMuted = document.querySelector('.text-muted');
        if (textMuted) textMuted.style.color = "#6c757d";
      }
    }
 


  return (
     <Router>
      <Navbar title="Accessories" about="About us" home="Home" mode={mode} toggleModeBtn={toggleModeBtn} label={lable}/>
      <Alert alert={alertMsg}/>
      

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/search" element={<SearchResults />}></Route>
        <Route path="/product" element={<ProductDetail />}></Route>
      </Routes>
      <Footer />
      
    </Router>
    
  );
}


export default App;