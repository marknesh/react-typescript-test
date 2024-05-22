'use client';
import React, { useState } from 'react';

const RandomDiscountCode = () => {
  const [randomDiscount, setRandomDiscount] = useState('');

  const handleRandomDiscount = () => {
    const code = 'NEWCODE' + Math.floor(100 + Math.random() * 900);

    setRandomDiscount(code);
  };

  return (
    <div>
      {randomDiscount && (
        <p>
          Your random discount code is{' '}
          <span className="font-bold">{randomDiscount}</span>
        </p>
      )}
      <button
        onClick={handleRandomDiscount}
        className="my-4 bg-green-700 px-3 w-full text-white font-bold text-lg py-2 rounded-lg"
      >
        Generate Random Discount
      </button>
    </div>
  );
};

export default RandomDiscountCode;
