import React, {useEffect, useState} from 'react';
import {GroupAdd} from "@mui/icons-material";
import {useNavigate} from "react-router-dom";
import {zipCode} from "../../../../shared";
import {validate} from "../../../../shared/utils/utility";

const SignUp = () => {

    const navigate = useNavigate();

    const [member, setMember] = useState({
        id : "",
        password : "",
        name : "",
        email : "",
        address : "",
        phone : "",
        birthDay : "",
        gender : ""
    });

    const [requiredCheck, setRequiredCheck] = useState(false)

    const changeMember = (event: any) => {
        const { value } = event.target;
        const { name } = event.target;
        if (name === 'mobile3') {
            const phoneNumber = phoneFirstNumber + "-" + phoneMiddleNumber + "-" + value
            setMember({...member, phone: phoneNumber})
        } else if (name === 'address2') {
            const wholeAddress = postAddress + " " + value
            setMember({...member, address: wholeAddress})
        } else {
            setMember({...member, [ name ] : value})
        }
        // console.log(member)

        if (member.id !== '' &&
            member.password !== '' &&
            member.name !== '' &&
            member.email !== '' &&
            member.address !== '' &&
            member.id !== '' &&
            member.phone !== '' &&
            member.birthDay !== '' &&
            member.phone !== ''
        ) {
            setRequiredCheck(true)
        }
    };

    useEffect(() => {
        const genBtn = document.getElementsByClassName('gen_btn')
        for (var i = 0; i < document.getElementsByClassName('gen_btn').length; i++) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            member.gender === genBtn[i].getAttribute('value') ?
                genBtn[i].className += ' gen_select' : genBtn[i].className = 'gen_btn'
        }
    }, [member.gender])

    // 성별
    const genSelect = (event: any) => {
        const { value } = event.target;
        setMember({...member, gender: value})
    };

    // 주소
    const [zoneCode, setZoneCode] = useState('')
    const [postAddress, setPostAddress] = useState('')

    const handleAddress = (dataName: string, dataValue: string) => {
        dataName === 'zoncode' ? setZoneCode(dataValue) : setPostAddress(dataValue)
    }

    // 전화번호
    const [phoneFirstNumber, setPhoneFirstNumber] = useState('')
    const [phoneMiddleNumber, setPhoneMiddleNumber] = useState('')

    const options = [
        '010', '011'
    ]

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
                              name="id"
                              placeholder='아이디를 입력하세요'
                              minLength={6}
                              maxLength={12}
                              onBlur={validate}
                              onChange={changeMember}
                          />
                      </div>
                      <div>
                          <button type='button' className='sort_btn'>
                              <img src="/image/lockIcon.png" alt="" id='id_sort' className='sort_img'/>
                          </button>
                      </div>
                  </div>
                  <div style={{marginTop: '5px'}}>
                      <p><span id='id_check' className='check'></span></p>
                      <p>아이디는 <span className='worning'>6자리에서 12자리</span>로 입력해주세요</p>
                      <p><span className='worning'>영문과 숫자</span>만 입력해주세요</p>
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
                              name="password"
                              placeholder='비밀번호를 입력하세요'
                              style={{fontFamily: 'Fira Code'}}
                              minLength={8}
                              maxLength={16}
                              onBlur={validate}
                              onChange={changeMember}
                          />
                      </div>
                      <div>
                          <button type='button' className='sort_btn'>
                              <img src="/image/lockIcon.png" alt="" id='password_sort' className='sort_img'/>
                          </button>
                      </div>
                  </div>
                  <div style={{marginTop: '5px'}}>
                      <p><span id='password_check' className='check'></span></p>
                      <p>비밀번호는 <span className='worning'>8자리에서 16자리</span>로 입력해주세요</p>
                      <p><span className='worning'>영문(대소문자), 숫자, 문자의 조합</span>으로 입력해주세요</p>
                  </div>
              </div>
              {/* 이름 */}
              <div className='sign_margin'>
                  <p className='sign_sort'>이름</p>
                  <div className='sort_root'>
                      <input
                          className='sort_field'
                          type="text"
                          id='name'
                          name='name'
                          placeholder='이름을 입력하세요'
                          onChange={changeMember}
                      />
                  </div>
                  <div style={{marginTop: '5px'}}>
                      <p><span id='name_check' className='check'></span></p>
                  </div>
              </div>
              {/* 생일 & 성별 */}
              <div className='sign_margin'>
                  <div style={{display: "flex"}}>
                      <p className='sign_sort'>생년월일</p>
                      <p className='sign_sort' style={{marginLeft: '325px'}}>성별</p>
                  </div>
                  <div className='sort_root' style={{border: 0, padding: 0}}>
                      <div className='sort_root' style={{width: '360px', marginTop: 0}}>
                          <input
                              className='sort_field'
                              type="text"
                              id='birthDay'
                              name='birthDay'
                              style={{width: '280px'}}
                              placeholder='생년월일을 입력하세요'
                              onBlur={validate}
                              onChange={changeMember}
                          />
                          <div>
                              <button type='button' className='sort_btn'>
                                  <img src="/image/lockIcon.png" alt="" id='birthDay_sort' className='sort_img'/>
                              </button>
                          </div>
                      </div>
                      <div style={{display: 'flex', marginLeft: '10px'}}>
                          <div className='gen'>
                              <input
                                  type="button"
                                  defaultValue='F'
                                  name='gen_F'
                                  className='gen_btn'
                                  onClick={genSelect}
                              />
                          </div>
                          <div className='gen' style={{marginLeft: '10px'}}>
                              <input
                                  type="button"
                                  defaultValue='M'
                                  name='gen_M'
                                  className='gen_btn'
                                  onClick={genSelect}
                              />
                          </div>
                      </div>
                  </div>
                  <div style={{marginTop: '5px'}}>
                      <p><span id='birthDay_check' className='check'></span></p>
                  </div>
              </div>
              {/* 주소 */}
              <div className='sign_margin'>
                  <p className='sign_sort'>주소</p>
                  <div className='sort_root_address'>
                      <div style={{display: "flex"}}>
                          <input
                              disabled={true}
                              className='zipCode'
                              name="zonecode"
                              type="text"
                              readOnly={postAddress === ''}
                              value={zoneCode}
                              onChange={(e) => {
                                  e.target.blur()
                              }}
                          />
                          {zipCode(handleAddress)}
                      </div>
                      <div className='address_div'>
                          <input
                              disabled={true}
                              type="text"
                              className="address_input"
                              name="address1"
                              readOnly={postAddress === ''}
                              value={postAddress}
                              onChange={(e) => {
                                  e.target.blur()
                              }}
                          />
                      </div>
                      <div className='address_div'>
                          <input
                              type="text"
                              className="address_input"
                              name="address2"
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
                              name='email'
                              placeholder='이메일을 입력하세요'
                              onBlur={validate}
                              onChange={changeMember}
                          />
                      </div>
                      <div>
                          <button type='button' className='sort_btn'>
                              <img src="/image/lockIcon.png" alt="" id='email_sort' className='sort_img'/>
                          </button>
                      </div>
                  </div>
                  <div style={{marginTop: '5px'}}>
                      <p><span id='email_check' className='check'></span></p>
                  </div>
                  <p style={{color: '#4D505A'}}>예) petsfinder@petsfinder.com</p>
              </div>
              {/* 전화번호 */}
              <div className='sign_margin'>
                  <p className='sign_sort'>전화번호</p>
                  <div className='sort_root' style={{border: 0, padding: 0}}>
                      <div>
                          <select
                              id="mobile1"
                              name="mobile1"
                              className="sort_field_mobile"
                              defaultValue={phoneFirstNumber}
                              onChange={(e) => setPhoneFirstNumber(e.target.value)}
                              style={{width: '95px', margin: '0 12px 0 0 '}}
                          >
                              <option value="">선택</option>
                              {options.map((content, i) => {
                                  return <option key={i} value={content}>{content}</option>
                              })}
                          </select>
                      </div>
                      -
                      <div>
                          <input
                              id="mobile2"
                              name="mobile2"
                              type="text"
                              className="sort_field_mobile"
                              onChange={(e) => {
                                  setPhoneMiddleNumber(e.target.value)
                              }}
                              maxLength={4}
                          />
                      </div>
                      -
                      <div>
                          <input
                              id="mobile3"
                              name="mobile3"
                              type="text"
                              className="sort_field_mobile"
                              onChange={changeMember}
                              maxLength={4}
                          />
                      </div>
                  </div>
                  <div style={{marginTop: '5px'}}>
                      <p><span id='mobile_check' className='check'></span></p>
                  </div>
              </div>
              {/* 버튼 */}
              <div className="sign_Btn_div">
                  <div>
                      <p style={{fontSize: '30px', fontWeight: 'bold'}}>회원 가입</p>
                  </div>
                  <button className="sign_Btn_Icon" onClick={(e) => {
                      e.preventDefault();
                      if (requiredCheck) {
                          // MemberLogic.instance.memberRegist(member);
                          navigate("/signIn");
                      } else {
                          alert('필수 입력 값을 모두 입력하세요!')
                      }
                  }}>
                      <GroupAdd />
                  </button>
              </div>
              <div className="login_Text">
                  <a href="/signIn" style={{color: 'black'}}>로그인</a>
              </div>
          </div>
      </div>
  );
};

export default SignUp;