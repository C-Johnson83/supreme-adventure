import React, { useState, useEffect } from 'react';
import { useQuery, useMutation  } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_LIST } from '../utils/queries';
import { ADD_ITEM_TO_LIST} from '../utils/mutations';
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
    const [items, setItems] = useState([]);
    const [newItemTitle, setNewItemTitle] = useState('');
    const [newItemDescription, setNewItemDescription] = useState('');
    const [newItemLink, setNewItemLink] = useState('');
    // const [newItemNote, setNewItemNote] = useState('');

    const addItem = async () => {
        console.log('Adding item')
        try {
            const newItem = await addItemToList({
                variables: {
                    id: id,
                    title: newItemTitle,
                    description: newItemDescription,
                    link: newItemLink,
                   
                }
            });
            console.log('newitem', newItem);
            setItems([...items, newItem.data.addItemToList]);
            setNewItemTitle(''); // Clear input fields after adding item
            setNewItemDescription('');
            setNewItemLink('');
          
        } catch (error) {
            console.error('Failed to add item:', error.message);
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

    return (
        <>
            <div>
                <>
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
                </>

            </div>

            <div className="hero eventHero">
                <div className="overlay"></div>
                <div >
                  <Row>
                        {items.map((item, index) => (
                             <Col key={index} md={4}>
                             <Card>
                                 <Card.Body>
                                     <Card.Title>{item.title}</Card.Title>
                                     <Card.Subtitle className="mb-2 text-muted">{item.description}</Card.Subtitle>
                                     <Card.Text>
                                         To view or purchase the item clink the link below
                                     </Card.Text>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    {item.title}
                                </a>
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