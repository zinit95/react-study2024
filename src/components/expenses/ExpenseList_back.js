import React from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

const ExpenseList = ({ expenses }) => {


  const onFilterChange = (filteredYear) => {

    // ExpenseFilter에 있는 선택된 연도값을 여기서 출력!
    console.log('ExpenseList: ',filteredYear);
  };


  // App.js에서 받은 expenses 배열을 <ExpenseItem> 배열로 변환하는 함수
  const convertToComponentArray = () => {

    return expenses
    .map(ex => <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />);


    // const newArray = [];
    // for (const ex of expenses) {
    //   const tag = <ExpenseItem title={ex.title} price={ex.price} date={ex.date} />;
    //   newArray.push(tag);
    // }
    // return newArray;
  };


  return (
    <div className="expenses">

      <ExpenseFilter onChangeFilter={onFilterChange} />

      { convertToComponentArray() }

      {/* <ExpenseItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
        /> */}


    </div>
  );
};

export default ExpenseList;
