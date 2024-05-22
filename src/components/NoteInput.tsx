'use client';
import { addNote } from '@/redux/features/NoteSlice';
import { AppDispatch, useAppSelector } from '@/redux/store';
import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

const NoteInput = () => {
  const [note, setNote] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const savedNote = useAppSelector((state) => state.notesReducer.value);

  const handleNoteSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!note.trim()) {
      return alert('Please enter a note');
    }

    dispatch(addNote(note));
  };

  return (
    <div>
      {savedNote && (
        <p>
          Your note is <span className="font-bold">{savedNote}</span>
        </p>
      )}
      <form onSubmit={handleNoteSubmit} className="flex flex-col">
        <label htmlFor="note" className="text-gray-700">
          Enter Note
        </label>

        <input
          id="note"
          type="text"
          onChange={(e) => setNote(e.target.value)}
          className="border h-10 px-3 focus:ring-0 focus:outline-0 rounded-lg"
          placeholder="my note"
        />

        <button
          type="submit"
          className="my-4 bg-green-700 w-full text-white font-bold text-lg py-2 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NoteInput;
