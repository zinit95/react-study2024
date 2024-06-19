import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({onAdd, onCancel}) => {
  //입력칸에 있는 3개의 값을 상태값으로 관리
  // const [title, setTitle] = useState('');
  // const [price, setPrice] = useState(0);
  // const [date, setDate] = useState(null);

  //입력칸에 있는 3개의 값을 하나의 상태값으로 관리
  const [userInput, setUserInput] = useState({
    title : '',
    price : '',
    date : ''
  });


  // 오늘 날짜를 YYYY-MM-DD 형식으로 가져오는 함수
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더해줌
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

    // 제목이 입력되었을 때 발생하는 이벤트 핸들러
    const titleChangeHandler = e => {

      // userInput.title = e.target.value; (X)

      //객체나 배열 상태로 관리되는 상태닶은 상태 변경시 새로운 객체나 배열을 setter에 전달해야 함
      

      setUserInput(prevUserInput => ({
        ...prevUserInput,
        title: e.target.value
      }));
    };
  
  
    // 가격이 입력되었을 때 발생하는 이벤트 핸들러
    const priceChangeHandler = e => {
      //setPrice(+e.target.value);

      setUserInput({
        ...userInput, //기존 객체에 있는거 복사하고 변경만 
        // title : userInput.title,
        price : e.target.value
        // date : userInput.date
      });
    };
  
    // 날짜가 입력되었을 때 발생하는 이벤트 핸들러
    const dateChangeHandler = e => {
      //setDate(e.target.value);
      setUserInput({
        ...userInput, //기존 객체에 있는거 복사하고 변경만 
        // title : userInput.title,
        // price : userInput.price,
        date : e.target.value
      });
    };


  //폼 전송 이벤트 핸들러 
  const submitHandler = e =>{
    e.preventDefault(); //폼 전송 방지
    // console.log('폼이 전송됨!');

    //지출 내역 객체를 생성 
    // const NewExpense = {
    //   title,
    //   price,
    //   date
    // };
    // console.log(NewExpense);

    console.log(userInput);

    //app.js 에게 받은 함수를 호출
    onAdd({
      ...userInput,
      date : new Date(userInput.date)

    });

    //form input 비우기
    setUserInput({
      title : '',
      price : '',
      date : ''
    });
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            onChange={titleChangeHandler} 
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            min="100"
            step="100"
            onChange={priceChangeHandler}
            value={userInput.price}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={getTodayDate()}
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
