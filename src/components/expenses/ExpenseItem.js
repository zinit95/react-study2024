import React from 'react'
import '../ExpenseItem.css';


const ExpenseItem = () => {

  // 변수 선언
  const expenseDate = new Date(2024, 6, 12);
  const expenseTitle = '점심식사';
  const expensePrice = 8000;

  // 함수 선언
  const makeFormattedDate = () => {

    const year = expenseDate.getFullYear();
    const month = expenseDate.getMonth();
    const date = expenseDate.getDate();

    return `${year}년 ${month}월 ${date}일`;
  };

  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(expensePrice);

  return (
    <div className='expense-item'>
      <div>{makeFormattedDate()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>{formattedPrice}원</div>
      </div>
    </div>
  )
}

export default ExpenseItem