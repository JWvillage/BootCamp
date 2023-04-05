import React from 'react';
import {BoardDetail} from "../../components";
import {BoardStore} from "../../store";

interface propsData {
  boardData? : {
    active : string
    data : BoardStore
  };
}

const BoardDetailView: React.FunctionComponent<propsData> = props => {
  
  return (
      <>
        <BoardDetail boardData={props.boardData ? props.boardData : {active : "create", data : new BoardStore()}}/>
      </>
  );
};

export default BoardDetailView;