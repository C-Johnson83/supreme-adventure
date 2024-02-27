import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { SEARCH_ACCESS_CODE } from '../utils/queries';

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('gdfbdf');
    const [validated, setValidated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [searchResults, setSearchResults] = useState(null);

    const { loading, error, data } = useQuery(SEARCH_ACCESS_CODE, {
        variables: { accessCode: searchTerm },
        errorPolicy: "all",
    });
    console.log("Query Data",data);
    useEffect(() => {
        if (error) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [error]);


    useEffect(() => {
     
        if (data) {
            setSearchResults(data.getListByAccessCode);
         
        }
    }, [data]);
    


    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
 
        console.log('searched code\n', searchTerm);
    };
    

console.log('search',searchResults);
return (
    <>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert
                dismissible
                onClose={() => setShowAlert(false)}
                show={showAlert}
                variant="danger"
            >
                Something went wrong with your search!
            </Alert>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor="searchTerm">Search Access Code</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter access code"
                    name="searchTerm"
                    onChange={handleInputChange}
                    value={searchTerm}
                    required
                />
                <Form.Control.Feedback type="invalid">
                    Access code is required!
                </Form.Control.Feedback>
            </Form.Group>

            <Button
                disabled={!searchTerm}
                type="submit"
                variant="primary"
            >
                {loading ? 'Searching...' : 'Search'}
            </Button>
        </Form>
        {searchResults && (
            <div>
            <p>User Name: {searchResults.userName}</p>
            <p>List Type: {searchResults.listType}</p>
            <p>List Name: {searchResults.listName}</p>
            <p>Event Date: {searchResults.eventDate}</p>
            <p>Access Code: {searchResults.accessCode}</p>
            <p>Items:</p>
        <ul>
            {searchResults.items.map((item, index) => (
                <li key={index}>
                    <p>Title: {item.title}</p>
                    <p>Description: {item.description}</p>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.title}
                                </a>
                </li>
            ))}
        </ul>
        </div>
        )}
    </>
);
};

export default SearchForm;
