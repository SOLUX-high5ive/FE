// src/startpage.js

import React, { useState } from 'react';

const StartPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // 로그인 로직 추가
    console.log('로그인:', email, password);
  };

  const handleSignUp = () => {
    // 회원가입 로직 추가
    console.log('회원가입 버튼');
  };

  return (
    <div>
      <label>
        이메일:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <br />
      <label>
        비밀번호:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button onClick={handleLogin}>로그인</button>
      <button onClick={handleSignUp}>회원가입 및 성향테스트</button>
    </div>
  );
};

export default StartPage;
