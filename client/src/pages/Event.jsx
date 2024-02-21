import React, { useState } from 'react';
import LoginForm from '../components/LoginForm'; 
import SignupForm from '../components/SignupForm'; 

//import '../css/event.css';

const Event = () => {
    const [items, setItems] = useState([{ name: '', link: '', purchased: false }]); // State to store list of items

    // Function to handle adding a new item
    const addItem = () => {
        setItems([...items, { name: '', link: '', purchased: false }]); // Add an empty item
    };

    // Function to handle updating an item
    const updateItem = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setItems(newItems);
    };

    // Function to handle toggling the purchase status
    const togglePurchased = (index) => {
        const newItems = [...items];
        newItems[index].purchased = !newItems[index].purchased;
        setItems(newItems);
    };

    return (
        <>
            <div className="hero eventHero">
                <div className="overlay"></div>
                <div className="content">
                    {/* Render the Login component */}
                    <LoginForm />
                    {/* Render the Signup component */}
                    <SignupForm />
                    <h1>Welcome to Our Event Registry</h1>
                    <p>Add items with names, links, and purchase status!</p>
                    <ul>
                        {/* Render list items */}
                        {items.map((item, index) => (
                            <li key={index}>
                                {item.link ? ( // Conditionally render input fields or hyperlink
                                    <>
                                        <input
                                            type="checkbox"
                                            checked={item.purchased}
                                            onChange={() => togglePurchased(index)}
                                        />
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            {item.name || 'Untitled'}
                                        </a>
                                    </>
                                ) : (
                                    <>
                                        <input
                                            type="text"
                                            value={item.name}
                                            onChange={(e) => updateItem(index, 'name', e.target.value)}
                                            placeholder="Enter item name"
                                        />
                                        <input
                                            type="text"
                                            value={item.link}
                                            onChange={(e) => updateItem(index, 'link', e.target.value)}
                                            placeholder="Paste your link here"
                                        />
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                    {/* Add item button */}
                    <button onClick={addItem}>Add Item</button>
                </div>
            </div>
        </>
    );
};

export default Event;
