'use client';
import { validateDiscountCode } from '@/lib/utils';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const DiscountCodeInput = () => {
  const [discountCode, setDiscountCode] = useState('');
  const handleDiscountInput = (event: ChangeEvent<HTMLInputElement>) => {
    setDiscountCode(event.target.value);
  };

  const handleDiscountCodeSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateDiscountCode(discountCode)) {
      alert('Discount added successfully');
    } else {
      alert('Discount code does not match pattern');
    }
  };
  return (
    <div>
      <form onSubmit={handleDiscountCodeSubmit} className="flex flex-col">
        <label htmlFor="discount" className="text-gray-700">
          Enter discount code
        </label>

        <input
          id="discount"
          type="text"
          onChange={handleDiscountInput}
          className="border h-10 px-3 focus:ring-0 focus:outline-0 rounded-lg"
          placeholder="DISCOUNT2024"
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

export default DiscountCodeInput;
