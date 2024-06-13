import React, {useState} from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ date, title, price: exPrice }) => {

  // console.log('props: ', aaa);

  // 변수 선언
  // const expenseDate = date;
  // const expenseTitle = title;
  // const expensePrice = exPrice;

  // 함수 선언

  // 1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  };

  const makeFormattedDate = () => {

    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };

  //let itemTitle = title;

  //useState 는 컴포넌트의 상태값을 관리하며 이 상태값은 렌더링에 영향을 미침
  // - useState 훅의 리턴값은 배열이며
  // - 첫번째 요소는 관리할 상태값의 초기값
  // - 두번째 요소는 해당 상태값을 변경할 때 사용하는 setter 함수 
  const [itemTitle, setItemTitle] = useState(title);
  //console.log('abc', abc);

  // 원화 표기법으로 변환
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(exPrice);

  //리턴 전이라서 이렇게 작성하면 안됨 에러코드
  // const $btn = document.getElementById('btn');
  // console.log('btn', $btn);

  //이벤트 핸들러 선언
  const clickHandler = e => {
    //console.log('클릭함');
    //console.log(e.target.previousElementSibling.firstElementChild.textContent);

    // const $price = document.querySelectorAll('.expense-item__price');
    // console.log($price);

    // itemTitle = '하하호호123';
    // console.log('title', itemTitle);

   
    //useState가 관리하는 상태값은 반드시 setter 로만 변경해야 합니다. 
    setItemTitle('쨔장므ㅜㄴ');
  }

  console.log('렌더링 전');

  //리엑트에서는 onClick={clickHandler} 케멀케이스로 가야 됨
  //onClick={clickHandler} 에서 clickHandler() 호출 하면 안됨.
  return (
      <Card className='expense-item'>
        <ExpenseDate exDate={date} />
        <div className='expense-item__description'>
          <h2>{itemTitle}</h2>
          <div className='expense-item__price'>{formattedPrice}원</div>
        </div>
        <button id='btn' onClick={clickHandler}>제목수정</button>
        {/* <button id='btn2' onMouseOver={e=>{alert('우앙');}}>2빠튼2</button> */}
      </Card>
  )
}

export default ExpenseItem;