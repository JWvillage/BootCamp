import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Login} from "@mui/icons-material";

const IdSearch = () => {

    const navigate = useNavigate();

    const [member, setMember] = useState({
        memberName : "",
        memberEmail : ""
    });

    const changeMember = (event: any) => {
        const {value} = event.target;
        const {name} = event.target;

        setMember({...member, [name]: value});
    }

    const idSearch = () => {
        const url = '/api/member/idSearch';
        fetch(url, {
            method : 'POST',
            body : JSON.stringify(member)
        })
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            if (result.status === "200") {
                const findMember = JSON.parse(result.member);
                alert("찾으신 아이디는 " + findMember.memberId + "입니다!");
                navigate('/signIn');
            } else {
                alert(result.errorMsg);
                setMember({memberName: "",memberEmail: ""})
            }
        })
    }

    return (
        <div className='sign_Root'>
            <div className='sign_Frm'>
                {/* 이름 */}
                <div className='sign_margin'>
                    <p className='sign_sort'>이름</p>
                    <div className='sort_root'>
                        <div>
                            <input
                                className='sort_field'
                                type="text"
                                name="memberName"
                                placeholder='이름을 입력하세요'
                                value={member.memberName}
                                onChange={changeMember}
                            />
                        </div>
                    </div>
                </div>
                {/* 이메일 */}
                <div className='sign_margin'>
                    <p className='sign_sort'>이메일</p>
                    <div className='sort_root'>
                        <div>
                            <input
                                className='sort_field'
                                type="text"
                                name="memberEmail"
                                placeholder='이메일을 입력하세요'
                                value={member.memberEmail}
                                onChange={changeMember}
                            />
                        </div>
                    </div>
                </div>
                <div className="sign_Btn_div">
                    <div>
                        <p style={{fontSize: '30px', fontWeight: 'bold'}}>아이디 찾기</p>
                    </div>
                    <button
                        className="sign_Btn_Icon"
                        onClick={() => {
                            if (member.memberName !== "" && member.memberEmail !== "")
                                idSearch();
                            else
                                alert("모두 입력 후 다시 시도해주세요!");
                        }}
                    >
                        <Login />
                    </button>
                </div>
                <div className="login_Text">
                    <a href="/signIn" style={{color: 'black'}}>로그인</a>
                    <a href="/signUp" style={{color: 'black'}}>회원 가입</a>
                </div>
            </div>
        </div>
    );
};

export default IdSearch;