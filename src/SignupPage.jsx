import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import camera from '../images/select.svg';
import airplane from '../images/signup_airplane.png';
import logo from '../images/signup_logo.svg';
import arrow from '../images/downarrow.svg';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
    background: linear-gradient(#253149, #323691);
    width: calc(100vw - 200px);
    min-height: calc(100vh - 70px);
    padding: 70px 100px 0 100px;
`
const SignUp = styled.div`
    color: #FFF;
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 10px;
`
const FlexBox = styled.div`
    display: flex;
    justify-content: space-between;
`
const Div = styled.div`
    width: 45%;
`
const InputBox = styled.div`
    overflow: scroll;
    width: 100%;
    height: calc(100vh - 220px);
    //background-color: aliceblue;
`
const Title = styled.div`
    color: #FFF;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
    margin-top: 20px;
`
const InputLine = styled.div`
    display: flex;
    border-radius: 15px;
    background: rgba(242, 242, 242, 0.23);  
    padding: 10px;
    justify-content: space-between;
`
const Input = styled.input`
    border: none;
    background: none;  
    padding: 12px;
    padding-left: 20px;
    outline: none;
    width: 85%;
    color: white;
    font-size: 20px;
    font-weight: 600;
    &::placeholder {
        color: rgba(210, 210, 210, 0.52);
    }
`
const SendBtn = styled.button`
    border-radius: 21.5px;
    background: #6695F1;
    border: none;
    width: 93px;
    cursor: pointer;
    &:hover {
        background: #5880cf;
    }
`
const FlexDiv = styled.div`
    display: flex;
    justify-content: space-between;
`
const SexBtn = styled.div`
    border-radius: 15px;
    background: rgba(242, 242, 242, 0.23);
    color: #FFF;
    font-size: 25px;
    font-weight: 600;
    width: 45%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const Introduce = styled.textarea`
    width: 93%;
    height: 120px;
    border-radius: 15px;
    background: rgba(242, 242, 242, 0.23);
    resize: none;
    padding: 12px;
    padding-left: 20px;
    outline: none;
    color: white;
    font-size: 20px;
    font-weight: 600;
    &::placeholder {
        color: rgba(210, 210, 210, 0.52);
    }
`
const Words = styled.div`
    color: rgba(210, 210, 210, 0.52);
    font-size: 20px;
    font-weight: 600;
    display: flex;
    align-items: end;
    margin-bottom: 10px;
`
const Emsg = styled.div`
    font-size: 15px;
    margin-top: 5px;
`
const PhotoBox = styled.div`
    margin-right: 20px;
`
const FileInput = styled.input`
    display: none;
    width: 253px;
`
const Label = styled.label`
    width: 253px;
`
const Box = styled.div`
    width: 154px;
    height: 154px;
    border-radius: 77px;
    background: rgba(242, 242, 242, 0.23);
    z-index: 3;
    cursor: pointer;
    > img {
        position: relative;
        z-index: 0;
        object-fit: cover;
        width: 50px;
        height: 50px;
    }
`
const RightBox = styled.div`
    text-align: center;
    width: 50%;
`
const Img = styled.img`
    margin: auto;
    width: 400px;
`
const Explain = styled.div`
    color: #FFF;
    font-size: 25px;
    font-weight: 600;
`
const Btn = styled.button`
    width: 260px;
    height: 81px;
    border-radius: 40.5px;
    background: #6695F1;
    color: #FFF;
    font-size: 25px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 30px;
    &:hover {
       background: #5880cf;
    }
`
const Arrow = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`

const SignupPage = () => {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [password, setPassword] = useState('');
    const [pw1Message, setPw1Message] = useState('');
    const [password2, setPassword2] = useState('');
    const [pw2Message, setPw2Message] = useState('');
    const [name, setName] = useState('');
    const [sex, setSex] = useState('');
    const [birth, setBirth] = useState('');
    const [birthMessage, setBirthMessage] = useState('');
    const [nickname, setNickname] = useState('');
    const [introduce, setIntroduce] = useState('');
    const [count, setCount] = useState(0);
    const imgRef = useRef();
    const [imgFile, setImgFile] = useState("");
    const [realfile, setRealFile] = useState([]);

    const [isId, setIsId] = useState(false);
    const [isemail, setIsemail] = useState(false);
    const [ispwform, setIspwform] = useState(false);
    const [pwcheck, setPwcheck] = useState(false);
    const [isname, setIsname] = useState(false);
    const [issex, setIssex] = useState(false);
    const [isbirth, setIsbirth] = useState(false);
    const [isnickname, setIsnickname] = useState(false);
    const [isintroduce, setIsintroduce] = useState(false);
    const [isimg, setIsimg] = useState(false);

    const onChangeId = (e) => {
        setId(e.target.value);
        setIsId(true);
    }
    const onChangeEmail = (e) => {
        const currentEmail = e.target.value;
        setEmail(currentEmail);

        const emailRegex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

        if (!emailRegex.test(currentEmail)) {
            setEmailMessage(
                <span style={{ color: '#FE334C' }}>
                    이메일 형식에 맞게 입력해주세요.
                </span>);
            console.log(emailMessage);

        } else {
            setEmailMessage("");
            setIsemail(true);
            console.log('유효 이메일');
        }
    }
    const onChangePW = (e) => {
        const currentPw = e.target.value;
        setPassword(currentPw);

        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;

        if (!passwordRegex.test(currentPw)) {
            setPw1Message(
                <span style={{ color: '#FE334C' }}>
                비밀번호는 8-16자, 영문, 숫자, 특수문자(!@#$%^&*?_)를 포함해야 합니다.
                </span>
            );
        } else {
            setPw1Message("");
            setIspwform(true);
        }
    }
    const onChangePW2 = (e) => {
        const currentPw2 = e.target.value;
        setPassword2(currentPw2);

        if (currentPw2 !== password) {
            setPw2Message(
                <span style={{ color: '#FE334C' }}>
                비밀번호가 일치하지 않습니다.
                </span>
            );
        } else {
            setPw2Message("");
            setPwcheck(true);
        }
    }
    const onChangeName = (e) => {
        setName(e.target.value);
        setIsname(true);
    }
    const handleSex = (e) => {
        setSex(e.target.id);
        setIssex(true);
    }
    const onChangeBirth = (e) => {
        const currentBirth = e.target.value;
        setBirth(currentBirth);

        const birthRegex = /^\d{4}\.\d{2}\.\d{2}$/;

        if (!birthRegex.test(currentBirth)) {
            setBirthMessage(
                <span style={{ color: '#FE334C' }}>
                YYYY.MM.DD 형식으로 입력해주세요.
                </span>
            );
        } else {
            setBirthMessage("");
            setIsbirth(true);
        }
    }
    const onChangeNickname = (e) => {
        setNickname(e.target.value);
        setIsnickname(true);
    }
    const onChangeIntroduce = (e) => {
        setIntroduce(e.target.value);
        if (e.target.value.length > 100) {
            return
        }
        setCount(
            e.target.value.length
        );
        setIsintroduce(true);
    }
    const saveImgFile = () => {
        const file = imgRef.current.files[0];
        setRealFile(file);
        const reader = new FileReader();
        if (file) {
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImgFile(reader.result);
            };
            console.log(file);
        }
        setIsimg(true);
    };

    const handleSignup = () => {
        navigate('/test');
        console.log(
            `
            아이디: ${id}\n
            이메일: ${email}\n
            비밀번호: ${password}\n
            이름: ${name}\n
            성별: ${sex}\n
            생년월일: ${birth}\n
            닉네임: ${nickname}\n
            자기소개: ${introduce}\n
            프로필사진: ${imgFile}\n
            `
        )
    }

    return (
        <Wrapper>
            <SignUp>회원가입</SignUp>
            <FlexBox>
                <Div>
                <InputBox>
                    <Title>아이디</Title>
                    <InputLine>
                        <Input
                            name='id'
                            type='text'
                            placeholder='아이디를 입력해주세요.'
                            onChange={onChangeId}
                            value={id}/>
                    </InputLine>
                    <Title>이메일</Title>
                    <InputLine>
                        <Input
                            name='email'
                            type='text'
                            placeholder='이메일을 입력해주세요.'
                            onChange={onChangeEmail}
                            value={email}/>
                    </InputLine>
                    <Emsg>{emailMessage}</Emsg>
                    <Title>비밀번호</Title>
                    <InputLine>
                        <Input
                            name='password'
                            type='text'
                            placeholder='비밀번호를 입력해주세요.'
                            onChange={onChangePW}
                            value={password}/>
                    </InputLine>
                    <Emsg>{pw1Message}</Emsg>
                    <Title>비밀번호 확인</Title>
                    <InputLine>
                        <Input
                            name='password2'
                            type='text'
                            placeholder='비밀번호를 다시 한 번 입력해주세요.'
                            onChange={onChangePW2}
                            value={password2}/>
                    </InputLine>
                    <Emsg>{pw2Message}</Emsg>
                    <FlexDiv>
                        <div style={{width: "45%", marginRight: "5%"}}>
                            <Title>이름</Title>
                            <InputLine>
                                <Input
                                    name='name'
                                    type='text'
                                    placeholder='이름을 입력해주세요.'
                                    onChange={onChangeName}
                                    value={name}/>
                            </InputLine>
                        </div>
                        <div style={{width: "45%"}}>
                            <Title>성별</Title>
                            <FlexDiv>
                                <SexBtn id='male' onClick={handleSex} style={{backgroundColor: sex === 'male'? 'white' : '', color: sex === 'male'? 'black' : ''}}>남</SexBtn>
                                <SexBtn id='female' onClick={handleSex} style={{backgroundColor: sex === 'female'? 'white' : '', color: sex === 'female'? 'black' : ''}}>여</SexBtn>
                            </FlexDiv>
                        </div>
                    </FlexDiv>
                    <Title>생년월일</Title>
                    <InputLine>
                        <Input
                            name='birth'
                            type='text'
                            placeholder='YYYY.MM.DD 형태로 입력해주세요.'
                            onChange={onChangeBirth}
                            value={birth}/>
                    </InputLine>
                    <Emsg>{birthMessage}</Emsg>
                    <Title>닉네임</Title>
                    <InputLine>
                        <Input
                            name='nickname'
                            type='text'
                            placeholder='닉네임을 입력해주세요.'
                            onChange={onChangeNickname}
                            value={nickname}/>
                    </InputLine>
                    <FlexDiv>
                        <Title>자기소개</Title>
                        <Words>{count}/100자</Words>
                    </FlexDiv>
                    <Introduce
                        maxLength='100'
                        name='introduce'
                        value={introduce}
                        placeholder='자기소개를 입력해주세요.'
                        onChange={onChangeIntroduce}/>
                    <Title>프로필 사진 선택</Title>
                        <Label for="img">
                            <Box>
                                <img src={imgFile ? imgFile : camera} style={{width:"100%", height:"100%", borderRadius:'77px'}}/>
                            </Box>
                        </Label>
                        <FileInput
                            type="file"
                            accept="image/*"
                            id="img"
                            onChange={saveImgFile}
                            ref={imgRef}
                        />
                </InputBox>
                <Arrow><img src={arrow}/></Arrow>
                </Div>
                <RightBox>
                    <Img src={airplane}/>
                    <Explain>다양한 성향의 여행자들이 모이는 이곳은</Explain>
                    <div style={{display:"flex", justifyContent:"center", lineHeight:"37px"}}>
                        <Explain>Planet Travel,</Explain>
                        <img src={logo} style={{marginLeft:"10px"}}/>
                    </div>
                    <Btn onClick={handleSignup}>회원가입 완료 →</Btn>
                </RightBox>
            </FlexBox>
        </Wrapper>
    );
};

export default SignupPage;