import './style.css';
import AddCertificate from './AddCertificate'; // Import the AddCertificate component
import React, { useContext, useState } from 'react';
import CertificateContext from './CertificateContext';

function Certificates({ Toggle }) {
    const { NoofCertificate, setNoofCertificate, certificates, setCertificates } = useContext(CertificateContext);
    const [searchInput, setSearchInput] = useState('');
    const [editIndex, setEditIndex] = useState(-1); // State to track the index of the certificate being edited
    const [editedName, setEditedName] = useState(''); // State to track the edited name value
    const [editedCertificateCode, setEditedCertificateCode] = useState(''); // State to track the edited certificate code value
    const [editedCourseName, setEditedCourseName] = useState(''); // State to track the edited course name value
    const [editedDate, setEditedDate] = useState(''); // State to track the edited date value

    // Function to add a new certificate to the list
    const addCertificate = (newCertificate) => {
        setCertificates([...certificates, { ...newCertificate, id: certificates.length + 1 }]);
        setNoofCertificate(certificates.length + 1); // Update the number of certificates
    };

    // Function to handle removing a certificate
    const handleRemove = (index) => {
        // Create a new array excluding the certificate at the specified index
        const updatedCertificates = certificates.filter((_, i) => i !== index);
        // Set the state with the updated array
        setCertificates(updatedCertificates);
        setNoofCertificate(certificates.length - 1); // Update the number of certificates
    };

    // Function to handle editing a certificate
    const handleEdit = (index) => {
        setEditIndex(index);
        // Set initial values for the edited fields
        setEditedName(certificates[index].name);
        setEditedCertificateCode(certificates[index].certificateCode);
        setEditedCourseName(certificates[index].courseName);
        setEditedDate(certificates[index].date);
    };

    // Function to handle saving the edited certificate
    const handleSave = () => {
        // Create a copy of the certificates array
        const updatedCertificates = [...certificates];
        // Update the edited certificate with new values
        updatedCertificates[editIndex] = {
            ...updatedCertificates[editIndex],
            name: editedName,
            certificateCode: editedCertificateCode,
            courseName: editedCourseName,
            date: editedDate
        };
        // Set the state with the updated array
        setCertificates(updatedCertificates);
        // Reset the editIndex state to -1 to exit the editing mode
        setEditIndex(-1);
    };

    // Filter the certificates based on the search input
    const filteredCertificates = certificates.filter(certificate =>
        certificate.courseName.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
        <div className='px-3'>
            <h1 className='text-center'>Certifications</h1>

            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-md-12'>
                        <div className='bg-white shadow-sm rounded p-3'>
                            {/* Add certificate button */}
                            <div className="d-flex justify-content-end mb-3">
                                {/* Pass the addCertificate function as a prop */}
                                <AddCertificate onAddCertificate={addCertificate} />
                            </div>

                            {/* Search bar */}
                            <div className="d-flex justify-content-end mb-3">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Search certificates..." 
                                    value={searchInput} 
                                    onChange={(e) => setSearchInput(e.target.value)} 
                                />
                            </div>

                            {/* Certificate list */}
                            <table className="table caption-top bg-white rounded">
                                <caption className='text-white fs-4'>Certification List</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">#serial</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Certificate Code</th>
                                        <th scope="col">Course Name</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* Map over the filtered certificates array to render each certificate */}
                                    {filteredCertificates.map((certificate, index) => (
                                        <tr key={certificate.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>
                                                {editIndex === index ? (
                                                    // Render input field for editing
                                                    <input 
                                                        type="text" 
                                                        value={editedName} 
                                                        onChange={(e) => setEditedName(e.target.value)} 
                                                    />
                                                ) : (
                                                    // Render certificate name
                                                    certificate.name
                                                )}
                                            </td>
                                            <td>
                                                {editIndex === index ? (
                                                    // Render input field for editing
                                                    <input 
                                                        type="text" 
                                                        value={editedCertificateCode} 
                                                        onChange={(e) => setEditedCertificateCode(e.target.value)} 
                                                    />
                                                ) : (
                                                    // Render certificate code
                                                    certificate.certificateCode
                                                )}
                                            </td>
                                            <td>
                                                {editIndex === index ? (
                                                    // Render input field for editing
                                                    <input 
                                                        type="text" 
                                                        value={editedCourseName} 
                                                        onChange={(e) => setEditedCourseName(e.target.value)} 
                                                    />
                                                ) : (
                                                    // Render course name
                                                    certificate.courseName
                                                )}
                                            </td>
                                            <td>
                                                {editIndex === index ? (
                                                    // Render input field for editing
                                                    <input 
                                                        type="text" 
                                                        value={editedDate} 
                                                        onChange={(e) => setEditedDate(e.target.value)} 
                                                    />
                                                ) : (
                                                    // Render date
                                                    certificate.date
                                                )}
                                            </td>
                                            <td>
                                                {/* Conditionally render edit form or edit button */}
                                                {editIndex === index ? (
                                                    // Render edit form buttons
                                                    <>
                                                        <button onClick={handleSave}>Save</button>
                                                        <button onClick={() => setEditIndex(-1)}>Cancel</button>
                                                    </>
                                                ) : (
                                                    // Render edit button
                                                    <button className="btn btn-sm btn-secondary me-2" onClick={() => handleEdit(index)}>Edit</button>
                                                )}
                                                <button onClick={() => handleRemove(index)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Pagination */}
                            <div className="d-flex justify-content-center">
                                <button className="btn btn-secondary me-2">Previous</button>
                                <button className="btn btn-secondary me-3">1</button>
                                <button className="btn btn-secondary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certificates;
