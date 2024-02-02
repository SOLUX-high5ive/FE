// src/LandingPage.jsx

import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import SignupPage from './SignupPage';

const Background = styled.div`
  background: linear-gradient(#253149, #323691);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const EmailButton = styled.input`
  width: 386px;
  height: 81px;
  background-color: #8E8E8E;
  color: white;
  border: none;
  border-radius: 50px;
  opacity: 0.5;
  margin-top: 10px;
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
`;

const PasswordButton = styled.input``;

const LoginButton = styled.button`
  background-color: #6695F1;
  color: white;
  border-radius: 50px;
  border: none;
  padding: 10px 30px;
  margin-top: 10px;
  font-size: 20px;
  font-family: 'Pretendard', sans-serif;
  cursor: pointer;
`;

const SignUpButton = styled(EmailButton)`
  color: white;
  text-decoration: underline;
  margin-top: 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Logo = styled.div`
  width: 294px;
  height: 85px;
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

const StartPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log('로그인 시도:', email, password);
    //로그인 로직 추가
  };

  const handleSignUp = () => {
    history.push('/signup');
  };

  return (
    <Background>
      <Logo>PLAVEL</Logo>
      <EmailButton className="email-button" onClick={handleEmailChange}>
        이메일
      </EmailButton>
      <PasswordButton className="password-button" onClick={handlePasswordChange}>
        비밀번호
      </PasswordButton>
      <LoginButton className="login-button" onClick={handleLogin}>
        로그인
      </LoginButton>
      <SignUpButton className="signup-button" onClick={handleSignUp}>
        계정이 없으신가요? 회원가입 및 성향테스트하기
      </SignUpButton>
    </Background>
  );
};

export default LandingPage;