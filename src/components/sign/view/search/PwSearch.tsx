import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Login} from "@mui/icons-material";

const PwSearch = () => {
    const navigate = useNavigate();

    const [member, setMember] = useState({
        memberId : "",
        memberName : "",
        memberEmail : ""
    });

    const changeMember = (event: any) => {
        const {value} = event.target;
        const {name} = event.target;

        setMember({...member, [name]: value});
    }

    const pwSearch = () => {
        const url = '/api/member/pwSearch';
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
                    alert("찾으신 비밀번호는 " + findMember.memberPass + "입니다!");
                    navigate('/signIn');
                } else {
                    alert(result.errorMsg);
                    setMember({
                        memberId: "",
                        memberName: "",
                        memberEmail: ""
                    })
                }
            })
    }

    return (
        <div className='sign_Root'>
            <div className='sign_Frm'>
                {/* 아이디 */}
                <div className='sign_margin'>
                    <p className='sign_sort'>아이디</p>
                    <div className='sort_root'>
                        <div>
                            <input
                                className='sort_field'
                                type="text"
                                name="memberId"
                                placeholder='아이디를 입력하세요'
                                minLength={6}
                                maxLength={12}
                                value={member.memberId}
                                onChange={changeMember}
                            />
                        </div>
                    </div>
                </div>
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
                        <p style={{fontSize: '30px', fontWeight: 'bold'}}>비밀번호 찾기</p>
                    </div>
                    <button
                        className="sign_Btn_Icon"
                        onClick={() => {
                            if (member.memberId !== ""
                                && member.memberName !== ""
                                && member.memberEmail !== "")
                                pwSearch();
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

export default PwSearch;