import React from "react";
import { Card } from "./UI/Card";
//rafc 기본 컴포넌트 단축키 
const Great = (ccc) => {

  return (
    <Card className="border- ">
      <h1>Hello REACT!</h1>
      {ccc.childen}
    </Card>
  );
};

export default Great;