'use client';
import React from 'react';
import OptionRadio from './OptionRadio';
import { useAppSelector } from '@/redux/store';

const Options = () => {
  const selectedOption = useAppSelector((state) => state.optionsReducer.value);

  return (
    <div>
      {selectedOption && (
        <p className="py-5">
          You have selected{' '}
          <span className="font-bold text-lg">{selectedOption}</span>
        </p>
      )}

      <h1 className="pb-3">Please select one of these options:</h1>

      <OptionRadio radioLabel="Option A" />

      <OptionRadio radioLabel="Option B" />

      <OptionRadio radioLabel="Option C" />
    </div>
  );
};

export default Options;
