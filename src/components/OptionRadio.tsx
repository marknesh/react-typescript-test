'use client';
import { addOption } from '@/redux/features/OptionSlice';
import { AppDispatch } from '@/redux/store';
import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

type Props = {
  radioLabel: string;
};

const OptionRadio = ({ radioLabel }: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOptionsClick = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(addOption(event.target.value));
  };

  return (
    <div className="flex space-x-2">
      <input
        name="options-radio"
        onChange={handleOptionsClick}
        type="radio"
        value={radioLabel}
        id={radioLabel}
      />
      <label htmlFor={radioLabel}>{radioLabel}</label>
    </div>
  );
};

export default OptionRadio;
