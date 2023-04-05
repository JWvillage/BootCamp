import React from 'react';
import {Header} from "../../shared";
import {
    Board,
} from "../../components";
import {BoardStore} from "../../store";

const BoardView = (props : {flag : string}) => {

    function boardData(
        boardId: string,
        title: string,
        content: string,
        writer: string,
        postDate: string,
        hits: number,
        flag: string,
    ) {
        return { boardId, title, content, writer, postDate, hits, flag };
    }


    const rows = [
        boardData("1", '공지1', '공지사항입니다1', '이름1', '2023-01-23', 1.0, 'notice'),
        boardData("2", '공지2', '공지사항입니다2', '이름2', '2023-01-23', 2.0, 'notice'),
        boardData("3", '공지3', '공지사항입니다3', '이름3', '2023-01-23', 3.0, 'notice'),
        boardData("1", '일반1', '일반게시판입니다1', '이름1', '2023-01-23', 1.0, 'normal'),
        boardData("2", '일반2', '일반게시판입니다2', '이름2', '2023-01-23', 2.0, 'normal'),
        boardData("3", '일반3', '일반게시판입니다3', '이름3', '2023-01-23', 3.0, 'normal'),
        boardData("2", 'FAQ1', '자주 묻는 질문입니다2', '이름2', '2023-01-23', 2.0, 'faq'),
        boardData("3", 'FAQ2', '자주 묻는 질문입니다3', '이름3', '2023-01-23', 3.0, 'faq'),
        boardData("1", 'FAQ3', '자주 묻는 질문입니다1', '이름1', '2023-01-23', 1.0, 'faq'),
        boardData("1", 'Q&A1', '질문과 답변입니다1', '이름1', '2023-01-23', 1.0, 'qna'),
        boardData("2", 'Q&A2', '질문과 답변입니다2', '이름2', '2023-01-23', 2.0, 'qna'),
        boardData("3", 'Q&A3', '질문과 답변입니다3', '이름3', '2023-01-23', 3.0, 'qna'),
    ];

    const notice: BoardStore[] = [];
    const normal: BoardStore[] = [];
    const faq: BoardStore[] = [];
    const qna: BoardStore[] = [];

    rows.map((row: BoardStore) => {
        row.flag === 'notice' && notice.push(row);
        row.flag === 'normal' && normal.push(row);
        row.flag === 'faq' && faq.push(row);
        row.flag === 'qna' && qna.push(row);
    })

    return (
        <>
            <Header />
            { props.flag === 'notice' && <Board boardData={notice}/> }
            { props.flag === 'normal' && <Board boardData={normal}/> }
            { props.flag === 'faq' && <Board boardData={faq}/> }
            { props.flag === 'qna' && <Board boardData={qna}/> }
        </>
    );
};

export default BoardView;