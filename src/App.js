//리액트에서는 .js 를 생략행냐 됨
import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hello from './components/Hello'; 
import Bye from './components/Bye';
import Great from './components/Great';


//리액트 컨포넌트
function App() {

  //jsx 문법(라이브러리)
  const $h2 = React.createElement('h2', null, '방가방가 방토리');
  const $h3 = <h3>리액트 하이루</h3>
  //1. return 안에 있는 태그는 반드시 하나의 태그로 묶어야 함.
  //2. 빈 태그는 (닫는 태그가 없는)는 반드시 /> 로 마감 해야 된다
  //3. 태그의 class 속성은 자바스크립트 키워드 class와 겹쳐서 className으로 표기
  //4. 의미없는 부모는 <React.Fragment></React.Fragment> 로 감싸야 된다, 축약 표현은 <> 로 할 수 이따. 
  //5. 변수값이나 함수를 출력할 때는 {}로 감싸면 된다.
  const hell = '안녕안녕';
  return ( //아래는 html문법이 아니고 jsx 문법이다, return 에는 여러 태그를 보낼 수 없다 부모태그로 감싸줘야 된다,
    <>
    <Bye />
    <Hello />
    <Bye />
    <Great />
  </>  
  );
}

export default App;

/*
return (
  <div>
    <div className="App">
      <h1>{hell}</h1>
      <h1>안녕하시나요?</h1>
      {$h2}
      {$h3}
    </div>
    <div className='noname'>
      <input type="text" />
      <label htmlFor=''></label>
    </div>
  </div>
);
*/

