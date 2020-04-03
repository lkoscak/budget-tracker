import React from 'react';
import {TransactionProvider} from '../context/transaction/TransactionContext';
import TransactionHistory from './TransactionHistory';
import Balance from './Balance';
import ExpenseIncome from './ExpenseIncome';
import TransactionForm from './TransactionForm';


function AuthenticatedApp() {

  return (
          <TransactionProvider>
            <Balance/>
            <ExpenseIncome/>
            <TransactionHistory/>
            <TransactionForm/>
          </TransactionProvider>
  );
}

export default AuthenticatedApp;
