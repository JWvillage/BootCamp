import React, {FunctionComponent, useEffect, useState} from 'react';
import {BoardStore} from "../../../../store";
import {Header} from "../../../../shared";
import {useNavigate} from "react-router-dom";

interface propsData {
  boardData: {
    active: string
    data : BoardStore
  }
}

const BoardDetail: FunctionComponent<propsData> = props => {
  
  const navigate = useNavigate();
  
  useEffect(() => {
    const requestUrl = window.document.URL;
    const boardFlag = requestUrl.split('/')[4];
    const loginId = localStorage.getItem('loginId');
    if (loginId !== null)
      setBoardData({...boardData, data : {...boardData.data, flag: boardFlag, writer: loginId}})
    else 
      navigate('/signIn')
    console.log(boardData)
  }, [])
  
  const [boardData, setBoardData] = useState(props.boardData);
  
  const changeData = (e: any) => {
    const {name} = e.target.name;
    const {value} = e.target.value;
    setBoardData({...boardData, data : {...boardData.data, [name]: value}})
    console.log(name, " = ", value)
  }
  
  const createBoard = () => {
    
    console.log(JSON.stringify(boardData));
    
    const url = '/v1/apis/PETSFINDER/board/crud';
    fetch(url, {
      method : 'POST',
      body : JSON.stringify(boardData)
    })
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          console.log(result.status);
        })
  }
  
  return (
      <>
        <Header/>
        <div style={{display: "flex", justifyContent: "center", maxWidth: "1250px"}}>
          <input hidden={true} defaultValue={boardData.data.boardId}/>
          <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div style={{display: "flex", borderBottom: "1px solid black"}}>
              <div style={{padding: "10px"}}>
                제목
              </div>
              <div style={{padding: "10px"}}>
                <input
                    type="text"
                    name="title"
                    style={{border: "none"}}
                    defaultValue={boardData.data.title}
                    onChange={changeData}
                />
              </div>
              <div style={{padding: "10px"}}>
                날짜
              </div>
              <div style={{padding: "10px"}}>
                {boardData.data.postDate}
              </div>
              <div style={{padding: "10px"}}>
                조회수
              </div>
              <div style={{padding: "10px"}}>
                {boardData.data.hits}
              </div>
            </div>
            <div style={{display: "flex", borderBottom: "1px solid black"}}>
              <div style={{padding: "10px"}}>
                내용
              </div>
              <div style={{padding: "10px", height: "200px", width: "90%"}}>
                <textarea name="content" style={{resize: "none", overflow: "hidden"}} defaultValue={boardData.data.content} onChange={changeData}></textarea>
              </div>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end", maxWidth: "1250px", marginTop: "10px"}}>
              <button type="button" onClick={createBoard}>작성하기</button>
            </div>
            {/*
            <div style={{display: "flex", borderBottom: "1px solid black", padding: "10px", width: "100%"}}>
              <Comment/>
            </div>
            */}
          </div>
        </div>
      </>
  );
};

export default BoardDetail;