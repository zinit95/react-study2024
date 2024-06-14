import React, { useState } from 'react';
import CourseInput from './components/CourseGoals/CourseInput';
import CourseList from './components/CourseGoals/CourseList';
import './App.css';

//기본 더미 데이터ㅗ
const DUMMY_DATA = [
  {
    id : 'g1',
    text : '강지혜 = 고구마'
  },
  {
    id : 'g2',
    text : '전혜린 = 감자'
  },
];

const App = () => {
  const [goals, setGoals] = useState(DUMMY_DATA);

  const addGoalHandler = (goalObject) => {
    setGoals([...goals, goalObject]);
  };

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAdd={addGoalHandler} />
      </section>
      <section id="goals">
        <CourseList items = {goals} />
      </section>
    </div>
  );
};

export default App;


// import React, { useState } from 'react';
// import './CourseItem.css';

// const CourseItem = ({ item }) => {
//   const [click, setClick] = useState(false);
  
//   const handleClick = (e) => {
//     e.stopPropagation();
//     setClick(!click);
//     console.log("handleClick !!!", handleClick);
//   };




//   return <li className={`goal-item ${click ? 'hidden' : ''}`} onClick={handleClick}>{item.text}</li>;
// };

// export default CourseItem;


// import React, { useState } from 'react';
// import './CourseItem.css';

// const CourseItem = ({ item }) => {
//   const [clicked, setClicked] = useState(false);

//   const handleClick = () => {
//     setClicked(!clicked);
//   };

//   return (
//     <li className={`goal-item ${clicked ? 'hidden' : ''}`} onClick={handleClick}>
//       {item.text}
//     </li>
//   );
// };

// export default CourseItem;



