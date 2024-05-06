import React, { createContext, useState } from 'react';

const CertificateContext = createContext();

export const CertificateProvider = ({ children }) => {
    const [NoofCertificate, setNoofCertificate] = useState(0);
    const [certificates, setCertificates] = useState([]);

    return (
        <CertificateContext.Provider value={{ NoofCertificate, setNoofCertificate, certificates, setCertificates }}>
            {children}
        </CertificateContext.Provider>
    );
};

export default CertificateContext;