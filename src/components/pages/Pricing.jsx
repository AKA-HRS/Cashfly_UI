import React from "react";
import { PricingCard } from "../UI";
const pricingOptions = [
  {
    title: "Basic",
    price: "9.99",
    duration: "per month",
    features: ["Expense Tracking", "Budget Planning", "Financial Reports"],
  },
  {
    title: "Standard",
    price: "19.99",
    duration: "per month",
    features: [
      "Expense Tracking",
      "Budget Planning",
      "Financial Reports",
      "Investment Tracking",
      "Bill Reminders",
    ],
  },
  {
    title: "Premium",
    price: "29.99",
    duration: "per month",
    features: [
      "Expense Tracking",
      "Budget Planning",
      "Financial Reports",
      "Investment Tracking",
      "Bill Reminders",
      "Customer Support",
      "Data Backup",
    ],
  },
];

export function Pricing() {
  return (
    <div className=" flex flex-col items-center justify-center  w-full h-full">
      <h1 className="text-5xl font-bold text-white mb-12">Our Pricing</h1>
      <div className="flex flex-wrap justify-center max-md:overflow-y-scroll">
        {pricingOptions.map((option, index) => (
          <PricingCard
            key={index}
            title={option.title}
            price={option.price}
            duration={option.duration}
            features={option.features}
          />
        ))}
      </div>
    </div>
  );
}
