import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {TransactionProvider} from '../context/transaction/TransactionContext';
import Title from './Title';
import TransactionHistory from './TransactionHistory';
import Balance from './Balance';
import ExpenseIncome from './ExpenseIncome';
import TransactionForm from './TransactionForm';


function AuthenticatedApp() {

  return (
    <Router>
      <Route exact path='/'>
          <TransactionProvider>
            <Title titleText="Budget tracker"/>
            <Balance/>
            <ExpenseIncome/>
            <TransactionHistory/>
            <TransactionForm/>
          </TransactionProvider>
      </Route>
        <Route path='/title'>
          <Title titleText='Budget tracker'/>
        </Route>
    </Router>
  );
}

export default AuthenticatedApp;
