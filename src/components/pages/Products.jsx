import React from "react";
import { Service } from "../UI";
import expense from '../../assets/expense.svg'
import budget from '../../assets/budget.svg'
import invest from '../../assets/invest.svg'
import report from '../../assets/report.svg'

export function Products() {
  return (
    <div className="p-6 md:mx-12 max-md:overflow-y-scroll w-full h-full">
      <h1 className="text-4xl font-bold mb-4">Welcome to Cashfly</h1>
      <p className="text-lg mb-6">
        Cashfly is your ultimate personal finance manager that helps you take
        control of your finances effortlessly.
      </p>

      <h2 className="text-2xl font-bold mb-3">Our Services</h2>
      <div className="services mb-8">
        <Service
          title="Expense Tracking"
          description="Keep track of your daily expenses and monitor where your money goes."
          image={expense}
        />
        <Service
          title="Budget Planning"
          description="Create and manage your budgets to ensure you stay on top of your financial goals."
          image={budget}
        />
        <Service
          title="Investment Insights"
          description="Get insights into your investments and make informed decisions."
          image={invest}
        />
        <Service
          title="Financial Reports"
          description="Generate comprehensive financial reports to analyze your spending and saving patterns."
          image={report}
        />
      </div>

      <h2 className="text-2xl font-bold mb-3">Why Choose Cashfly?</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Easy to use and intuitive interface</li>
        <li>Secure and private data management</li>
        <li>Comprehensive financial tools</li>
        <li>Real-time expense tracking</li>
        <li>Customizable financial reports</li>
      </ul>

      <p className="text-lg">
        Take control of your finances today with Cashfly. Join thousands of
        satisfied users who have transformed their financial lives with our
        easy-to-use personal finance manager.
      </p>
    </div>
  );
}
