import React, { useState } from 'react';

function AddCertificate({ onAddCertificate }) {
    const [showModal, setShowModal] = useState(false);
    const [certificateData, setCertificateData] = useState({
        name: '',
        certificateCode: '',
        courseName: '',
        date: ''
    });

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCertificateData({
            ...certificateData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Pass the new certificate data to the parent component
        onAddCertificate(certificateData);
        // Reset the form and close the modal
        setCertificateData({
            name: '',
            certificateCode: '',
            courseName: '',
            date: ''
        });
        setShowModal(false);
    };

    return (
        <div>

            <button className="btn btn-primary" onClick={toggleModal}>Add Certificate</button>
                <div >
                    <div >
                        <div >
                            <div >
                                {/* <button type="button" className="btn-close" onClick={toggleModal}></button> */}
                            </div>
                            
                            {showModal && <div>  <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" value={certificateData.name} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="certificateCode" className="form-label">Certificate Code</label>
                                        <input type="text" className="form-control" id="certificateCode" name="certificateCode" value={certificateData.certificateCode} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="courseName" className="form-label">Course Name</label>
                                        <input type="text" className="form-control" id="courseName" name="courseName" value={certificateData.courseName} onChange={handleChange} />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="date" className="form-label">Date</label>
                                        <input type="date" className="form-control" id="date" name="date" value={certificateData.date} onChange={handleChange} />
                                    </div>
                                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Add</button>
                                </form>
                            </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            
        </div>
    );
}

export default AddCertificate;