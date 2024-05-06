import React from 'react';
import { createRoot } from 'react-dom/client'; 
import App from './App';
import { CertificateProvider } from './CertificateContext';

createRoot(document.getElementById('root')).render(
  <CertificateProvider >
    <App />
    </CertificateProvider>
);

