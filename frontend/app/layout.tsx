'use client'
import React, { ReactNode } from "react";
import { Provider } from 'react-redux';
import { store } from './redux/store'; // Import your Redux store
import "./globals.css";

function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#000000" />
        </head>
        <body>{children}</body>
      </html>
    </Provider>
  );
}

export default RootLayout;