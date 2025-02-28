// components/DefaultMessage.tsx
import React from 'react';
import Image from 'next/image';

const DefaultMessage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full flex-col">
      <Image
        src="/images/empty-note.png" // Replace with your background image
        alt="No Notes"
        width={200}
        height={200}
      />
      <p className="text-lg mt-4">I'm Just here waiting...</p>
    </div>
  );
};

export default DefaultMessage;
