import React from "react";

const MemoComp = ({ name }) => {
  console.log("Memo Comp Rendered");

  return <div>{name}</div>;
};

export default React.memo(MemoComp);
