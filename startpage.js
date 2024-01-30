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
    console.log('로그인 시도:', email, password);
  };

  const handleSignUp = () => {
    // 회원가입 로직 추가
    console.log('회원가입 및 성향테스트하기 클릭');
  };

  return (
    <div className="startpage">
      <img src="C:\사용자\박민주\startpage\landing.png" alt="플래닛 여행 사이트 랜딩 페이지" />
      <div>
        <label>이메일:</label>
        <input type="email" value={email} onChange={handleEmailChange} placeholder="이메일" />
      </div>
      <div>
        <label>비밀번호:</label>
        <input type="password" value={password} onChange={handlePasswordChange} placeholder="비밀번호" />
      </div>
      <button onClick={handleLogin}>로그인</button>
      <p>
        계정이 없으신가요? <button onClick={handleSignUp}>회원가입 및 성향테스트하기</button>
      </p>
    </div>
  );
};

export default StartPage;
