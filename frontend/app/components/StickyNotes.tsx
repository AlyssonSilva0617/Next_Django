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
            <div className="flex justify-between text-sm mb-4">
              <span className="font-semibold">{note.updated_at}</span>
              <span className="font-semibold">{note.category}</span>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col justify-between h-full">
              {/* Title */}
              <div className="font-bold text-lg">
                {note.title}{/* Content */}
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
