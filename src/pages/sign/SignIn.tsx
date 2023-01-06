import React, {useState} from 'react';
import {Header} from "../../shared";
import HomeView from '../home/HomeView'
import {
  Login
} from '@mui/icons-material';

const SignIn = () => {

  const [loginSucc, setLoginSucc] = useState("");
  
  return (
      <>
        <Header />
        {loginSucc === "" ? (
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
                          name="userId"
                          placeholder='아이디를 입력하세요'
                          minLength={6}
                          maxLength={12}
                          // onChange={loginHandle}
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
                          name="userPass"
                          placeholder='비밀번호를 입력하세요'
                          style={{fontFamily: 'Fira Code'}}
                          minLength={8}
                          maxLength={16}
                          // onChange={loginHandle}
                      />
                    </div>
                  </div>
                </div>
                <div className="login_Btn_div">
                  <div>
                    <p style={{fontSize: '30px', fontWeight: 'bold'}}>로그인</p>
                  </div>
                  <button
                      className="login_Btn_Icon"
                      // onClick={loginCheck}
                  >
                    <Login />
                  </button>
                </div>
                <div className="login_Text">
                  <a href="/login" style={{color: 'black'}}>회원 가입</a>
                </div>
              </div>
            </div>
        ) : (
            <HomeView />
        )}
      </>
  );
};

export default SignIn;