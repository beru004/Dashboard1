import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './Home';
import Certificates from './Certificates';
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Contact"
import Logout from './Logout';
import UserProfile from './UserProfile';


function App() {
    

    return (
      
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Certificates" element={<Certificates />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Logout" element={<Logout />} />
          <Route path="UserProfile" element={<UserProfile />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
    );
}

export default App;

