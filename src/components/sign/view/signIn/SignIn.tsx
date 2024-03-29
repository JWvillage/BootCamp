import React, {useState} from 'react';
import {
  Login
} from '@mui/icons-material';
import {useNavigate} from "react-router-dom";

const SignIn = () => {

  const navigate = useNavigate();

  const [member, setMember] = useState({
    memberId : "",
    memberPass : ""
  });

  const changeMember = (event: any) => {
    const {value} = event.target;
    const {name} = event.target;

    setMember({...member, [name]: value});
  }

  const singIn = () => {
    const url = '/api/member/login';
    fetch(url, {
      method : 'POST',
      body : JSON.stringify(member)
    })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.status === "200") {
        const loginMember = JSON.parse(result.member);
        localStorage.setItem("loginId", loginMember.memberId);
        alert(loginMember.memberName + "님 어서오세요!");
        navigate('/');
      } else {
        alert(result.errorMsg);
        setMember({memberId: "",memberPass: ""})
      }
    })
  }

  // const sign = () => {
  //   const msgData = customFetch(
  //     '/signIn',
  //     'POST',
  //       {
  //         memberId: member.memberId,
  //         memberPass: member.memberPass
  //       },
  //       {}
  //   )
  //
  //   console.log(msgData);
  // }

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
        {/* 비밀번호 */}
        <div className='sign_margin'>
          <p className='sign_sort'>비밀번호</p>
          <div className='sort_root'>
            <div>
              <input
                  className='sort_field'
                  type="password"
                  name="memberPass"
                  placeholder='비밀번호를 입력하세요'
                  style={{fontFamily: 'Fira Code'}}
                  minLength={8}
                  maxLength={16}
                  value={member.memberPass}
                  onChange={changeMember}
              />
            </div>
          </div>
        </div>
        <div className="sign_Btn_div">
          <div>
            <p style={{fontSize: '30px', fontWeight: 'bold'}}>로그인</p>
          </div>
          <button
              className="sign_Btn_Icon"
              onClick={() => {
                singIn()
                // sign()
              }}
          >
            <Login />
          </button>
        </div>
        <div className="login_Text">
          <a href="/idSearch" style={{color: 'black'}}>아이디 찾기</a>
          <a href="/pwSearch" style={{color: 'black'}}>비밀번호 찾기</a>
          <a href="/signUp" style={{color: 'black'}}>회원 가입</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;