import React, {FunctionComponent} from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {BoardStore} from "../../../../store";
import {useNavigate} from "react-router-dom";

interface propsData {
    boardData : BoardStore[]
}

const Board: FunctionComponent<propsData> = props => {
    
    const navigate = useNavigate();
    
    return (
        <>
            <TableContainer component={Paper} sx={{display: "flex", justifyContent: "center"}}>
                <Table sx={{ minWidth: 650, maxWidth: 1150}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">번호</TableCell>
                            <TableCell align="center">제목</TableCell>
                            <TableCell align="center">작성자</TableCell>
                            <TableCell align="center">날짜</TableCell>
                            <TableCell align="center">조회수</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.boardData.map((row) => (
                            <TableRow
                                key={row.boardId}
                            >
                                <TableCell align="center">{row.boardId}</TableCell>
                                <TableCell align="center">{row.title}</TableCell>
                                <TableCell align="center">{row.writer}</TableCell>
                                <TableCell align="center">{row.postDate}</TableCell>
                                <TableCell align="center">{row.hits}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{display: "flex", justifyContent: "flex-end", maxWidth: "1250px", marginTop: "30px"}}>
                <button type="button" onClick={() => {
                    navigate('./detail');
                }}>글쓰기</button>
            </div>
        </>
    );
};

export default Board;