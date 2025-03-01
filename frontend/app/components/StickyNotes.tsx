// components/StickyNote.tsx
'use client'
import React, { useMemo } from 'react';
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setNote } from '../redux/setenvSlice';

const StickyNote = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector(
    (state: RootState) => state.mgnote
  );
  const memoizedNotes = useMemo(() => notes, [notes]);
  const setUpdateNote = (note: any) => {
    dispatch(setNote(note));
  }
  function formatDate(timestamp: string): string {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1); // Get yesterday's date
    // Check if the date is today
    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return "Today";
    }

    // Check if the date is yesterday
    if (
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear()
    ) {
      return "Yesterday";
    }

    // Format: "1 March"
    return new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long" }).format(date);
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {/* <p>{title}</p> */}
      {memoizedNotes.map((note, index) => (
        <Link href="/pages/new-note" key={index}>
          <div className={`p-4 rounded-lg shadow-lg h-[300px] max-w-sm mx-auto my-4 w-full bg-${note.color}-100`} key={index} style={{ backgroundColor: note.color }}
            onClick={() => {
              setUpdateNote(note);
            }}
          >
            {/* Top Section */}
            <div className="flex justify-start text-sm mb-4 text-[20px]">
              <span className="font-semibold">{formatDate(note.updated_at)}</span>
              <span className="font-medium ml-5">{note.category}</span>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col justify-between h-full">
              {/* Title */}
              <div className="font-bold text-lg">
                <span className="text-[30px]">{note.title}</span>
                {/* Content */}
                <div className="text-sm mt-2 overflow-y-auto font-medium">
                  {note.content}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default StickyNote;
