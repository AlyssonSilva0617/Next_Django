// components/UpdatedTime.tsx
import React from 'react';

const UpdatedTime = ({ lastEdited }: any) => {
  const formattedTime = lastEdited
    ? `${lastEdited.toLocaleString('default', { month: 'long' })} ${lastEdited.getDate()}, ${lastEdited.getFullYear()} at ${lastEdited.toLocaleTimeString()}`
    : '';

  return <div className="text-sm text-gray-500 mt-2">Last Edited: {formattedTime}</div>;
};

export default UpdatedTime;
