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
import { Link } from 'react-router-dom';

const Users = () => {

    const [listType, setListType] = useState('');
    const [listName, setListName] = useState('');
    const [accessCode, setAccessCode] = useState('');
    const [eventDate, setDate] = useState('');

    const { loading, data } = useQuery(QUERY_ME, { errorPolicy: "all",refetchQueries:[{query: QUERY_ME}] });

    const [addList] = useMutation(ADD_LIST);
    const [createdLists, setCreatedLists] = useState([]);

    const userData = data?.me || {};

    console.log("lists", userData, "\n\n", userData.lists)



    useEffect(() => {
        // Function to set created lists
        const setInitialCreatedLists = () => {
            if (userData.lists) {
                setCreatedLists(userData.lists);
                console.log('there are lists')
            }
        };
        
        // Set created lists when component mounts
        setInitialCreatedLists();
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

            setCreatedLists([...createdLists, response.data.addList]);

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
            <div className="hero">
                <div className="overlay"></div>


                <Container className="mt-4">
                    <Row>
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
