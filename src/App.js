import React from 'react';
import './App.css';
import ExpenseItem from './components/expenses/ExpenseItem';

const App = () => {

  return (
    <>
      <ExpenseItem title={"회먹음"} price={80000} date={new Date(1990,2,20)} />
      <ExpenseItem title="족발먹음" price={60000} date={new Date(1995,3,23) }/>
      <ExpenseItem title="마라탕먹음" price={50000} date={new Date(2021,10,31)} />
    </>
  );
}

export default App;
