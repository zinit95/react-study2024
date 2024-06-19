import React, { useState } from 'react';
import './App.css';
import ExpenseList from './components/expenses/ExpenseList';
import NewExpense from './components/new-expense/NewExpense';

const App = () => {

  // 서버에서 지출항목 JSON 배열을 응답받음
  const expenses = [
    {
      title: '치킨먹음',
      price: 30000,
      date: new Date(2023, 6 - 1, 3)
    },
    {
      title: '족발먹음',
      price: 40000,
      date: new Date(2022, 2 - 1, 7)
    },
    {
      title: '헬스장등록',
      price: 300000,
      date: new Date(2021, 6 - 1, 12)
    },
    {
      title: '핏쨔',
      price: 40000,
      date: new Date(2020, 4 - 1, 9)
    },
    {
      title: '시원한 물회',
      price: 78000,
      date: new Date(2019, 9 - 1, 7)
    },
    {
      title: '오징어회',
      price: 78000,
      date: new Date(2024, 9 - 1, 7)
    },
    {
      title: '우럭 ',
      price: 78000,
      date: new Date(2022, 9 - 1, 7)
    },
    {
      title: '광어 ',
      price: 78000,
      date: new Date(2019, 9 - 1, 7)
    },
    {
      title: '매운탕 ',
      price: 78000,
      date: new Date(2019, 9 - 1, 7)
    },
    {
      title: '회덮밥 ',
      price: 78000,
      date: new Date(2024, 9 - 1, 7)
    },
  ];

  //배열을 상태변수로 관리 
  const [expenseList, setExpenseList] = useState(expenses);

  // ExpenseForm에게 내려보낼 함수
  const onAddExpense = (userInput) => {
    console.log('App.js 가 내려보낸 함수 호출!');
    // console.log(userInput);

    expenseList.push(userInput); //expenseList 기본 배열에 새로운 userInput을 push
    //const NewExpenseList = [...expenseList]; //expenseList 복사    
    //setExpenseList(NewExpenseList); //새로운 배열을 만들어서 변경감지 
    //const NewExpenseList = [...expenseList, userInput]; //expenseList 복사 하고 userInput 에 추가
    
    setExpenseList([...expenseList, userInput]);

    //console.log(expenses);
    console.log(expenseList);
  };

  return (
    <>
      <NewExpense onSave={onAddExpense} />
      <ExpenseList expenses={expenseList} />
    </>
  );
};

export default App;