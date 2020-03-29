import React from 'react';
import {TransactionProvider} from '../context/TransactionContext';
import Title from './Title';
import TransactionHistory from './TransactionHistory';
import Balance from './Balance';
import ExpenseIncome from './ExpenseIncome';
import TransactionForm from './TransactionForm';


function App() {
  return (
    <TransactionProvider>
      <Title titleText='Budget tracker'/>
      <Balance/>
      <ExpenseIncome/>
      <TransactionHistory/>
      <TransactionForm/>
    </TransactionProvider>
  );
}

export default App;
