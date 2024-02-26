import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { QUERY_LIST } from '../utils/queries';

const List = () => {
    const { id } = useParams();
    console.log(id);


    const { loading, error, data } = useQuery(QUERY_LIST, {
        variables: { id: id },
        errorPolicy: "all"
    });

    useEffect(() => {
        // You can perform additional actions when data or loading state changes
        console.log("Data:", data);
    }, [data, loading]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const list = data?.getListById;
    console.log('made it here')

    return (
        <div>
            <h2>List Details</h2>
            {list && (
                <>
                    <p>List Name: {list.listName}</p>
                    <p>List Type: {list.listType}</p>
                    <p>Access Code: {list.accessCode}</p>
                    <p>Event Date: {list.eventDate}</p>
                </>
            )}
        </div>
        
    );
}

export default List;

//import '../css/event.css';

// const List = () => {
//     const [items, setItems] = useState([{ name: '', link: '', purchased: false }]); // State to store list of items

//     // Function to handle adding a new item
//     const addItem = () => {
//         setItems([...items, { name: '', link: '', purchased: false }]); // Add an empty item
//     };

//     // Function to handle updating an item
//     const updateItem = (index, field, value) => {
//         const newItems = [...items];
//         newItems[index][field] = value;
//         setItems(newItems);
//     };

//     // Function to handle toggling the purchase status
//     const togglePurchased = (index) => {
//         const newItems = [...items];
//         newItems[index].purchased = !newItems[index].purchased;
//         setItems(newItems);
//     };

//     return (
//         <>
//             <div className="hero eventHero">
//                 <div className="overlay"></div>
//                 <div className="content">
//                     <h1>Welcome to Our Event Registry</h1>
//                     <p>Add items with names, links, and purchase status!</p>
//                     <ul>
//                         {/* Render list items */}
//                         {items.map((item, index) => (
//                             <li key={index}>
//                                 {item.link ? ( // Conditionally render input fields or hyperlink
//                                     <>
//                                         <input
//                                             type="checkbox"
//                                             checked={item.purchased}
//                                             onChange={() => togglePurchased(index)}
//                                         />
//                                         <a href={item.link} target="_blank" rel="noopener noreferrer">
//                                             {item.name || 'Untitled'}
//                                         </a>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <input
//                                             type="text"
//                                             value={item.name}
//                                             onChange={(e) => updateItem(index, 'name', e.target.value)}
//                                             placeholder="Enter item name"
//                                         />
//                                         <input
//                                             type="text"
//                                             value={item.link}
//                                             onChange={(e) => updateItem(index, 'link', e.target.value)}
//                                             placeholder="Paste your link here"
//                                         />
//                                     </>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                     {/* Add item button */}
//                     <button onClick={addItem}>Add Item</button>
//                 </div>
//             </div>
//         </>
//     );
// };


