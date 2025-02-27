import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Fetch items from Django API
        axios.get('http://localhost:8000/api/items/')
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('Error fetching data', error);
            });
    }, []);

    return (
        <div>
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>{item.name}: {item.description}</li>
                ))}
            </ul>
        </div>
    );
}