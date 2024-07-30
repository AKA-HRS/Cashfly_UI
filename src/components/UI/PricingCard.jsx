import React from 'react';

export function PricingCard({ title, price, duration, features }) {
  return (
    <div className="w-80 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-30 rounded-lg shadow-lg p-6 m-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="text-4xl font-bold text-white my-4">${price}</p>
      <p className="text-lg text-white">{duration}</p>
      <ul className="text-white mt-4">
        {features.map((feature, index) => (
          <li key={index} className="mb-2 list-decimal ml-5">
            {feature}
          </li>
        ))}
      </ul>
      <button className="mt-12 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-2 px-4 rounded">
        Get Started
      </button>
    </div>
  );
}


