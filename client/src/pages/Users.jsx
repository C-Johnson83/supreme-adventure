import { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
//import { QUERY_USERS } from '../utils/queries';
import { QUERY_ME } from '../utils/queries';
import { ADD_LIST, DELETE_LIST } from '../utils/mutations';
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
import { Link } from 'react-router-dom';

const Users = () => {

    const [listType, setListType] = useState('');
    const [listName, setListName] = useState('');
    const [accessCode, setAccessCode] = useState('');
    const [eventDate, setDate] = useState('');

    const { loading, data } = useQuery(QUERY_ME, { errorPolicy: "all", refetchQueries: [{ query: QUERY_ME }] });

    const [addList] = useMutation(ADD_LIST);
    const [deleteList] = useMutation(DELETE_LIST);
    const [createdLists, setCreatedLists] = useState([]);

    const userData = data?.me || {};





    useEffect(() => {
        // Function to set created lists
        const setInitialCreatedLists = () => {
            if (userData.lists) {
                setCreatedLists(userData.lists);

            }
        };

        // Set created lists when component mounts
        setInitialCreatedLists();
    }, [userData.lists]);

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



            setCreatedLists([...createdLists, response.data.addList]);

            setAccessCode('');
            setListType('');
            setListName('');
            setDate('');

        } catch (error) {
            console.error('Error saving list:', error);
        }

    };
    const handleDeleteList = async (_id) => {
            try {
                await deleteList({ variables: { _id } });
                setCreatedLists(createdLists.filter(list => list._id !== _id));
            } catch (error) {
                console.error('Error deleting list:', error);
            }
        };


    return (
        <>
            <div className="hero">
                <div className="overlay"></div>
                <div className="listContent">
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
                                    <option value="Baby Shower">BabyShower</option>
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
                                    dateFormat="MM-dd-yyyy"
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


                    <Row>
                <Container className="userCardContent">
                        {createdLists.map((list, index) => (
                            <Col key={index} md={4}>
                                <Card className='Card'>
                                    <Card.Body>
                                        <Card.Title>{list.listName}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{list.listType}</Card.Subtitle>
                                        <Card.Text>
                                            Access Code: {list.accessCode}
                                            <br />
                                            Event Date: {new Date(list.eventDate).toLocaleDateString()}
                                        </Card.Text>
                                        <Link to={`/list/${list._id}`}>View List</Link>
                                        <Button className='delete' variant="danger" onClick={() => handleDeleteList(list._id)}>Delete</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                </Container>
                    </Row>



            </div>


        </>
    );
};



// </>


export default Users;
