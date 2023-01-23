import React from 'react';
import {Header} from "../../shared";
import {
    Board,
} from "../../components";

const BoardView = (props : {flag : string}) => {

    function boardData(
        num: number,
        title: string,
        name: string,
        postDate: string,
        hits: number,
        flag: string,
    ) {
        return { num, title, name, postDate, hits, flag };
    }


    const rows = [
        boardData(1, '공지사항입니다1', '이름1', '2023-01-23', 1.0, 'notice'),
        boardData(2, '공지사항입니다2', '이름2', '2023-01-23', 2.0, 'notice'),
        boardData(3, '공지사항입니다3', '이름3', '2023-01-23', 3.0, 'notice'),
        boardData(1, '일반게시판입니다1', '이름1', '2023-01-23', 1.0, 'normal'),
        boardData(2, '일반게시판입니다2', '이름2', '2023-01-23', 2.0, 'normal'),
        boardData(3, '일반게시판입니다3', '이름3', '2023-01-23', 3.0, 'normal'),
        boardData(1, '자주 묻는 질문입니다1', '이름1', '2023-01-23', 1.0, 'faq'),
        boardData(2, '자주 묻는 질문입니다2', '이름2', '2023-01-23', 2.0, 'faq'),
        boardData(3, '자주 묻는 질문입니다3', '이름3', '2023-01-23', 3.0, 'faq'),
        boardData(1, '질문과 답변입니다1', '이름1', '2023-01-23', 1.0, 'qna'),
        boardData(2, '질문과 답변입니다2', '이름2', '2023-01-23', 2.0, 'qna'),
        boardData(3, '질문과 답변입니다3', '이름3', '2023-01-23', 3.0, 'qna'),
    ];

    const notice: any[] = [];
    const normal: any[] = [];
    const faq: any[] = [];
    const qna: any[] = [];

    rows.map((row) => {
        row.flag === 'notice' && notice.push(row);
        row.flag === 'normal' && normal.push(row);
        row.flag === 'faq' && faq.push(row);
        row.flag === 'qna' && qna.push(row);
    })

    return (
        <>
            <Header />
            { props.flag === 'notice' && <Board data={notice}/> }
            { props.flag === 'normal' && <Board data={normal}/> }
            { props.flag === 'faq' && <Board data={faq}/> }
            { props.flag === 'qna' && <Board data={qna}/> }
        </>
    );
};

export default BoardView;