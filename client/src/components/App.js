import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {TransactionProvider} from '../context/transaction/TransactionContext';
import {AuthProvider, useAuth} from '../context/auth/AuthContext';
import Title from './Title';
import TransactionHistory from './TransactionHistory';
import Balance from './Balance';
import ExpenseIncome from './ExpenseIncome';
import TransactionForm from './TransactionForm';


function App() {

  let authData = useAuth();

  return (
    <Router>
      <Route exact path='/'>
        <AuthProvider>
          <TransactionProvider>
            <Title titleText={authData.isAuthenticated?'Loged in':'Not loged in'}/>
            <Balance/>
            <ExpenseIncome/>
            <TransactionHistory/>
            <TransactionForm/>
          </TransactionProvider>
        </AuthProvider>
      </Route>
        <Route path='/title'>
          <Title titleText='Budget tracker'/>
        </Route>
    </Router>
  );
}

export default App;
