import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
//import { QUERY_USERS } from '../utils/queries';
import { QUERY_ME } from '../utils/queries';
import { ADD_LIST } from '../utils/mutations';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
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
    const [eventDate, setDate] = useState(new Date());

    const { loading, data } = useQuery(QUERY_ME, { errorPolicy: "all" });
    const [addList] = useMutation(ADD_LIST);
    const [createdLists, setCreatedLists] = useState([]);

    const userData = data?.me || {};

    console.log("why can't I get to lists with userData.lists?", userData)

    useEffect(() => {
        if (userData.lists) {
            setCreatedLists(userData.lists);
            console.log('there are lists')
        }
    }, [userData.lists]);

    const handleAddList = async (event) => {
        event.preventDefault()
        console.log('handleAddList called');
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
                <div className="ListContent">
                    <h1>Hello {userData.username}</h1>
                    <p>Lets make a list for your upcoming event!</p>
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
                                    as="select"
                                    value={listType}
                                    onChange={(e) => setListType(e.target.value)}
                                    placeholder="Select List Type"
                                    >
                                    <option value="">Select List Type</option>
                                    <option value="Wedding">Wedding</option>
                                    <option value="Birthday">Birthday</option>
                                    <option value="Baby Shower">Baby Shower</option>
                                </Form.Control>
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
                                <DatePicker
                                    selected={eventDate}
                                    onChange={date => setDate(date)}
                                    dateFormat="yyyy-MM-dd"
                                    type="text"
                                    placeholderText="Select Date"
                                    />
                            </Col>
                            <Col>
                                <Button type="submit">Save List</Button>
                            </Col>
                        </Row>
                    </Form>
                                    </div>
            <div className="hero eventHero">
                <div className="overlay"></div>
                

                <Container className="mt-4">
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
            </Container>


               
            </div>


        </>
    );
};



// </>


export default Users;
