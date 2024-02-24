import { useEffect, useState } from 'react';
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
    const { loading, data } = useQuery(QUERY_ME, { errorPolicy: "all" });
    const [addList] = useMutation(ADD_LIST);
    const [createdLists, setCreatedLists] = useState([]);

    const userData = data?.me || {};

    console.log("why can't I get to lists with userData.lists?", userData)

    // useEffect(() => {
    //     if (userData.lists) {
    //         setCreatedLists(userData.lists);
    //         console.log('there are lists')
    //     }
    // }, [userData.lists]);

    const handleAddList = async (event) => {
        event.preventDefault()

        try {
            const testData = {
                variables: {
                    username: userData.username,
                    accessCode,
                    listType,
                    listName,
                    eventDate
                }
            }

            const response = await addList(testData);
            console.log('List saved successfully:', response);

            setAccessCode('');
            setListType('');
            setListName('');
            setDate('');

        } catch (error) {
            console.error('Error saving list:', error);
        }
    };


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

            {/* <Container className="mt-4">
                <Row>
                    {createdLists.map((list, index) => (
                        <Col key={index} md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{list.listName}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{list.listType}</Card.Subtitle>
                                    <Card.Text>
                                        Access Code: {list.accessCode}
                                        <br />
                                        Event Date: {list.eventDate}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container> */}
        </>
    );
};



// </>


export default Users;
