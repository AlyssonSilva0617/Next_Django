// app/layout.tsx
import React from 'react';
import Link from 'next/link';
import './globals.css';  // Global CSS styles

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My To-Do App</title>
      </head>
      <body>
        <header style={headerStyle}>
          <h1>My To-Do App</h1>
          <nav>
            <ul style={navStyle}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/items">Items</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main style={mainStyle}>
          {children}
        </main>
        <footer style={footerStyle}>
          <p>© 2025 My To-Do App. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

const headerStyle = {
  padding: '20px',
  backgroundColor: '#333',
  color: 'white',
  textAlign: 'center',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  listStyleType: 'none',
  padding: 0,
  margin: 0,
};

const mainStyle = {
  padding: '20px',
  minHeight: '70vh',
};

const footerStyle = {
  textAlign: 'center',
  padding: '10px',
  backgroundColor: '#333',
  color: 'white',
  marginTop: '20px',
};

export default Layout;
