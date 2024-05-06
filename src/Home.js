import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import CertificateContext from './CertificateContext';

function Home({ Toggle }) {
    const { NoofCertificate, setNoofCertificate } = useContext(CertificateContext);
    return (
        <div className='container' >
            <div className='row justify-content-center mt-5'>
                <div className='col-md-8'>
                    <div className='card shadow'>
                        <div className='card-body' style={{backgroundColor:'aquamarine'}}>
                            <h1 className='text-center mb-4'>Welcome to TrustEase</h1>
                            <h2 className='text-center'><FontAwesomeIcon icon={faCertificate} className='me-2' /> No of Certifications: {NoofCertificate}</h2>
                            <div className='text-center mt-4'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
