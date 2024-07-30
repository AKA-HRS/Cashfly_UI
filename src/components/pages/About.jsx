import React from 'react'

export function About() {
  return (
    <div className="w-full h-full p-8 md:p-28"><h1 className="text-4xl font-bold mb-4">About Cashfly</h1>
    <p className="text-lg mb-4">
      Welcome to Cashfly, your ultimate personal finance manager. Our mission is to empower you to take control of your finances with ease and confidence.
    </p>
    <p className="text-lg mb-4 md:w-1/2">
      Cashfly provides a comprehensive suite of tools designed to help you manage your income, expenses, and savings effectively. Whether you are tracking your daily spending, planning a budget, or saving for future goals, Cashfly is here to support you every step of the way.
    </p>
    <h2 className="text-2xl font-semibold mb-2">Our Features</h2>
    <ul className="list-disc list-inside mb-4">
      <li>Expense Tracking: Easily record and categorize your expenses to see where your money is going.</li>
      <li>Budget Planning: Set up monthly budgets and monitor your progress to stay on track.</li>
      <li>Savings Goals: Define your savings goals and let Cashfly help you achieve them.</li>
      <li>Financial Insights: Get detailed reports and insights to make informed financial decisions.</li>
      <li>Secure and Private: Your financial data is securely stored and private.</li>
    </ul>
    <p className="text-lg">
      Join the Cashfly community today and start your journey towards financial freedom!
    </p></div> 
  )
}
