// /app/items/page.tsx

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Item } from '../types/item';  // Import the Item interface

const ItemsPage: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);  // State to store the fetched items
  const [loading, setLoading] = useState<boolean>(true);  // State for loading indicator
  const [error, setError] = useState<string>('');  // State for error handling

  useEffect(() => {
    // Fetching data from the API (replace with your Django API endpoint)
    axios.get<Item[]>('/api/items')
      .then(response => {
        setItems(response.data);  // Update state with the fetched items
        setLoading(false);  // Set loading to false once data is fetched
      })
      .catch(err => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  // Loading and error handling UI
  if (loading) return <p>Loading items...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsPage;
