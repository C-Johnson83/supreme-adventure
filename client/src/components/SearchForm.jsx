import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Card, Col, Row } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { SEARCH_ACCESS_CODE } from '../utils/queries';


const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [validated, setValidated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [searchResults, setSearchResults] = useState(null);
    const { loading, error, data } = useQuery(SEARCH_ACCESS_CODE, {
        variables: { accessCode: searchTerm },
        errorPolicy: "all",
    });
    console.log("Query Data", data);
    useEffect(() => {
        if (error && !(searchResults === null || searchResults === "")) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [error, searchResults]);


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


    console.log('search', searchResults);
    return (
        <>
            <div className="hero">
                <div className="overlay"></div>
                <div className="content">
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
                    </Form>
                    {searchResults && (searchResults  !={}) && (
                        <div>
                            <div className='item-details'>
                                <p>Welcome to {searchResults.username}'s {searchResults.listType} Event Requested Item list, "{searchResults.listName}"</p>
                                <p>Event Date: {searchResults.eventDate}</p>
                                <p>Access Code: {searchResults.accessCode}</p>
                            </div>
                            <p>Items:</p>
                            <Row>
                                {searchResults.items.map((item, index) => (
                                    <Col key={index} md={4}>
                                        <Card>
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">{item.description}</Card.Subtitle>
                                                <Card.Text>
                                                    To view or purchase the item clink the link below
                                                </Card.Text>
                                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                    Item Link
                                                </a>
                                            </Card.Body>
                                        </Card>

                                    </Col>
                                ))}
                            </Row>
                            
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default SearchForm;
