import React,{useState} from 'react';

const Counter = () => {
  
  let [num, setNum] = useState(0);

  let btnClick1 = () =>{
    setNum(num + 1);
    console.log('증가버튼');
  }
  let btnClick2 = () =>{
    if(num > 0){ 
      setNum(num - 1);
    }else{
      setNum(num - 0);
    }
    console.log('감소버튼');
  }


  return (
    <div>
      <h1>숫자 : {num}</h1>
      <button onClick={btnClick1}>증가</button>
      <button onClick={btnClick2}>감소</button>
    </div>
  );

};

export default Counter;
