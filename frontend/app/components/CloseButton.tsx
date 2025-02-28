// components/CloseButton.tsx
'use client';

import React from 'react';
import Link from "next/link";

const CloseButton = () => {

  return (
    <Link href="/pages/home">
    <button
      className="absolute top-4 right-4 text-3xl font-bold text-gray-600 hover:text-gray-800"
    >
      &times;
    </button>
    </Link>
  );
};

export default CloseButton;
