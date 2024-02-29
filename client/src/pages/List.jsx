import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_LIST } from '../utils/queries';
import { ADD_ITEM_TO_LIST, DELETE_ITEM_FROM_LIST } from '../utils/mutations';
import { Form, Button, Alert, Card, Col, Row } from 'react-bootstrap';

const List = () => {
    const { id } = useParams();


    const { loading, error, data } = useQuery(QUERY_LIST, {
        variables: { id: id },
        errorPolicy: "all"
    });

    const [addItemToList] = useMutation(ADD_ITEM_TO_LIST, {
        refetchQueries: [{ query: QUERY_LIST, variables: { id: id } }],
    });

    const [deleteItemFromList] = useMutation(DELETE_ITEM_FROM_LIST, {
        refetchQueries: [{ query: QUERY_LIST, variables: { id: id } }],
    });

    const [items, setItems] = useState([]);
    const [newItemTitle, setNewItemTitle] = useState('');
    const [newItemDescription, setNewItemDescription] = useState('');
    const [newItemLink, setNewItemLink] = useState('');
    

    const addItem = async () => {
       
        try {
            const newItem = await addItemToList({
                variables: {
                    id: id,
                    title: newItemTitle,
                    description: newItemDescription,
                    link: newItemLink,

                }
            });
            
            setItems([...items, newItem.data.addItemToList]);
            setNewItemTitle(''); // Clear input fields after adding item
            setNewItemDescription('');
            setNewItemLink('');

        } catch (error) {
            console.error('Failed to add item:', error.message);
        }
    };

    const deleteItem = async (itemId) => {
        try {
            await deleteItemFromList({
                variables: {
                    _id: itemId
                }
            });
            setItems(items.filter(item => item._id !== itemId));
        } catch (error) {
            console.error('Failed to delete item:', error.message);
        }
    };

    useEffect(() => {
        if (data) {
            const list = data.getListById;
            if (list) {
                setItems(list.items);
            }
        }
    }, [data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const myStyles = {
        Wedding: { background: "url('https://img.freepik.com/free-photo/interior-romantic-restaurant-modern-design-classic-style_8353-9909.jpg?w=1380&t=st=1709078314~exp=1709078914~hmac=1e2a1244fe1051514dbf22bcd7e08b09dec2d060253739926ad10a32480c9027')center/cover fixed" },
        Birthday: { background:  "url('https://img.freepik.com/free-vector/happy-birthday-flags-confetti-card_1017-32699.jpg?t=st=1709078187~exp=1709081787~hmac=a5c95c0be432f2efcb6849e8e470e9fad14bf7cc144c5810682033c270504e03&w=1380')center/cover fixed" },
        BabyShower: { background:  "url('https://img.freepik.com/free-vector/hand-painted-watercolor-gender-reveal-concept_23-2149003332.jpg?t=st=1709138345~exp=1709141945~hmac=20fc8d1a9dd749e8bb377f940d66a9efa8c9d77e14faef34f192b6fc21c1d4d5&w=996')center/cover fixed" },
    };

    return (
        <>


<div className="hero eventHero" style={myStyles[data.getListById.listType]}>
                <div className="overlay"></div>
                <div className='listInput'>
                    <div>
                        <h2>List Name: {data.getListById.listName}</h2>
                        <div className="list-details">
                            <p>List Type: {data.getListById.listType}</p>
                            <p>Access Code: {data.getListById.accessCode}</p>
                            <p>Event Date: {data.getListById.eventDate}</p>
                        </div>
                    </div>
                    <h1>{data.getListById.listName}</h1>
                    <p>Add items with names, links, and purchase status!</p>
                    <div>
                        <input
                            type="text"
                            value={newItemTitle}
                            onChange={(e) => setNewItemTitle(e.target.value)}
                            placeholder="Enter item title"
                        />
                        <input
                            type="text"
                            value={newItemDescription}
                            onChange={(e) => setNewItemDescription(e.target.value)}
                            placeholder="Enter item description"
                        />
                        <input
                            type="text"
                            value={newItemLink}
                            onChange={(e) => setNewItemLink(e.target.value)}
                            placeholder="Paste your link here"
                        />
                        <button onClick={addItem}>Add Item</button>
                    </div>
                </div>
                    <br />
                <div className="content">
                    <Row>
                        {items.map((item, index) => (
                            <Col key={index} md={4}>
                                <Card className='Card'>
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{item.description}</Card.Subtitle>
                                        <Card.Text>
                                            To view or purchase the item clink the link below
                                        </Card.Text>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            {item.title}
                                        </a>
                                        <Button variant="danger" onClick={() => deleteItem(item._id)}>Delete</Button>
                                    </Card.Body>
                                </Card>

                            </Col>
                        ))}
                    </Row>
                </div>
            </div>
        </>
    );
};

export default List;