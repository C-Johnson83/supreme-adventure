import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
//import { QUERY_USERS } from '../utils/queries';
import { QUERY_ME } from '../utils/queries';
import { ADD_LIST } from '../utils/mutations';
import {
	Container,
	Col,
	Form,
	Button,
	Card,
	Row
  } from 'react-bootstrap';

const Users = () => {
	const [listType, setListType] = useState('');
	const [listName, setListName] = useState('');
    const [accessCode, setAccessCode] = useState('');
	const [eventDate, setDate] = useState('');
	const [searchInput, setSearchInput] = useState('');
    const {loading, data } = useQuery(QUERY_ME, { errorPolicy: "all" });
	//const { loading, data } = useQuery(QUERY_USERS);
	const [addList] = useMutation(ADD_LIST);

	// const users = data?.users || [];
    
    const userData = data?.me || {};
    
    const handleAddList = async (event) => {
        event.preventDefault()
        console.log('i made it here')
        console.log(userData)
        console.log(event)
        try {
            const testData = {
                variables: {
                    username: userData.username, 
                    accessCode: event.target[0].attributes[3].nodeValue,
                    listType: event.target[1].attributes[3].nodeValue, 
                    listName: event.target[2].attributes[3].nodeValue, 
				}
            }
            console.log(testData)
            const response = await addList(testData);
            console.log('List saved successfully:', response);
        } catch (error) {
            console.error('Error saving list:', error);
        }
    };


	// const handleFormSubmit = async (event) => {
	// 	event.preventDefault();
	// 	// Implement your form submission logic here
	// 	const { items } = await response.json();
	 //};

	return (
        <>
            <div className="hero eventHero">
                <div className="overlay"></div>
                <div className="content">
                    <h1>Landing page</h1>
                    <p>Add items with names, links!</p>
                    <Form onSubmit={handleAddList}>
                        <Row>
                            <Col>
                                <Form.Control
                                    value={accessCode}
                                    onChange={(e) => setAccessCode(e.target.value)}
                                    type="text"
                                    placeholder="access code"
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    value={listType}
                                    onChange={(e) => setListType(e.target.value)}
                                    type="text"
                                    placeholder="type"
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    value={listName}
                                    onChange={(e) => setListName(e.target.value)}
                                    type="text"
                                    placeholder="list name"
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    value={eventDate}
                                    onChange={(e) => setDate(e.target.value)}
                                    type="text"
                                    placeholder="date"
                                />
                            </Col>
                            <Col>
                                <Button type="submit">Save List</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </>
    );
};



		// </>
	

export default Users;
