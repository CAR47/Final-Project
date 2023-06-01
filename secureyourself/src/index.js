import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import NavBar from './Component/NavBar';
import Footer from './Component/Footer';
import Login from './Pages/Login';
import About from './Pages/About';
import Chat from './Pages/Chat';
import HomePage from './Pages/homepage';
import SignUP from './Pages/Signup';
import Contact from './Pages/Contact.jsx';
import RansomwareInfoPage from './Pages/Ransomware';
import MalwareInfoPage from './Pages/Malware';
import AdwareInfoPage from './Pages/Adware';
import SpywareInfoPage from './Pages/Spyware';
import './Style/style.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <div>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUP />} />
      </Routes>
      <NavBar />
      <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/Malware" element={<MalwareInfoPage />} />
      <Route path="/Ransomware" element={<RansomwareInfoPage />} />
      <Route path="/Adware" element={<AdwareInfoPage />} />
      <Route path="/Spyware" element={<SpywareInfoPage />} />
      </Routes>
      <Footer />
    </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
