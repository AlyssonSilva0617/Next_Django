// pages/index.tsx
import Link from 'next/link';

const Home = () => {
  return (
    <div style={containerStyle}>
      <h1>Welcome to My To-Do App</h1>
      <p>This is a simple app to manage your to-do list. You can add, edit, and delete tasks.</p>

      <div style={linksContainerStyle}>
        <Link href="/items">
          <button style={buttonStyle}>Go to To-Do Items</button>
        </Link>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
  backgroundColor: '#f4f4f4',
};

const linksContainerStyle = {
  marginTop: '20px',
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
};

export default Home;
