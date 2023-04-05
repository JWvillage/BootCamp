import React from 'react';

const Comment = () => {
  return (
    <>
      <div style={{width: "88%", display: "flex", justifyContent: "center"}}>
        <input type="text" defaultValue="" style={{width: "360px", height: "40px"}}/>
      </div>
      <button type="button">입력하기</button>
    </>
  );
};

export default Comment;