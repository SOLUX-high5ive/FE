import React from 'react';
import styled from 'styled-components';
import airplane from '../images/banner_airplane.png';
import { useState, useEffect } from "react";

const TestButton = styled.button`
    background-color: #6695F1;
    color: white;
    border-radius: 50px;
    border: none;
    padding: 10px 25px;
    margin: 5px;
    width: 300px;

    display: flex;
    align-items: center; /* 세로 가운데 정렬 */
    justify-content: center; /* 가로 가운데 정렬 */

    &:hover {
      background-color: #5880cf;
`;

const ButtonContainer = styled.div`
  display: grid;
  place-items: center; /* 세로와 가로 정렬 */
  height: 10vh;
`;

const Text = styled.div`
    color: white;
    margin: 10px;
    margin-bottom: 0px;
    text-align: center;
`

const Status = styled.div`
    height: 10px;
    width: 450px;
    background-color: #9A9797;
    border-radius: 20px;
    margin: 10px;
`

const StatusBar = styled.div`
    height: 100%;
    background: #FFFFFF;
    border-radius: 20px;
`

const qnaList = [
    {
      q: "여행을 떠나게 되었다. 선호하는 계획은? ",
      a: [
        { answer: "여행은 자고로 자유여행", type: [0,6,7] },
        { answer: "알아서 다 해주는 패키지 여행이 최고", type: [3,4,5] }
      ],
      img: airplane
    },
    {
      q: "나와 함께 여행을 떠날 인원을 모집하자, 몇명이 좋을까? ",
      a: [
        { answer: "많을수록 좋아, 대규모 인원", type: [3] },
        { answer: "도란도란 소규모의 인원", type: [1,4] }
      ],
      img: airplane
    },
    {
      q: "여행은 얼마동안 다녀올까, 내가 선호하는 여행 기간은?",
      a: [
        { answer: "일주일 이하 단기 여행", type: [6,7] },
        { answer: "2주 이상 장기 여행", type: [3,5] }
      ],
      img: airplane
    },
    {
      q: "이제 여행 짐을 싸는 시간, 내가 짐을 싸는 유형은?",
      a: [
        { answer: "보부상 맥시멀리스트", type: [3,6,7] },
        { answer: "꼭 필요한 것만, 미니멀리스트", type: [5] }
      ],
      img: airplane
    },
    {
      q: "두근두근 공항에 도착한 나, 내가 선택한 항공권은?",
      a: [
        { answer: "시간대는 별로지만 저렴한 항공권", type: [0] },
        { answer: "최적의 시간대, 비싼 항공권", type: [1,7] }
      ],
      img: airplane
    },
    {
      q: "여행지에 도착했다! 내가 선호하는 다음 장소까지의 이동 수단은?",
      a: [
        { answer: "도보로 이동하며 길거리 분위기 느끼기 ", type: [2,4,5] },
        { answer: "여러 교통수단을 총 동원한다", type: [1,6] }
      ],
      img: airplane
    },
    {
      q: "내가 선호하는 여행지 스타일은?",
      a: [
        { answer: "힐링을 위한 휴양지", type: [3] },
        { answer: "볼거리 많은 관광지", type: [1] }
      ],
      img: airplane
    },
    {
      q: "여행을 하면서 내가 선호나는 사진 촬영 유형은?",
      a: [
        { answer: "남는 건 사진 뿐! 인생샷을 건진다", type: [3,6] },
        { answer: "사진보다는 그 순간을 즐긴다", type: [2,5] }
      ],
      img: airplane
    },
    {
      q: "내가 선호하는 여행지 음식점 유형은?",
      a: [
        { answer: "현지에 왔으면 현지 음식을 먹어봐야지, 현지 최적화 식당", type: [0,2,4] },
        { answer: "현지 음식은 별로.. 내 취향의 음식점", type: [7] }
      ],
      img: airplane
    },
    {
      q: "계획에 없던 맛있어 보이는 음식점을 발견했다. 이럴때 나는?",
      a: [
        { answer: "아쉽지만 계획에 없던 일, 지나친다", type: [1,4,7] },
        { answer: "계획에는 없었지만 한 번 들어가본다", type: [0,5] }
      ],
      img: airplane
    },
    {
      q: "행복한 하루를 보내고 숙소에 도착! 내가 선호하는 숙소는?",
      a: [
        { answer: "가격이 비싸도 숙소는 중요! 고급호텔", type: [1,3] },
        { answer: "가격이 저렴한 도미토리", type: [0,2] }
      ],
      img: airplane
    }
  ];

  const infoList = [
    "블랙홀","화이트홀", "지구", "토성", "태양", "혜성", "목성", "달"
  ];

const Test = () => {
  const endPoint = 11;
  const [select, setSelect] = useState(Array(8).fill(0));
  const [qIdx, setQIdx] = useState(0);
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [image, setImage] = useState([]);

  const calResult = () => {
    const randomIndex = Math.floor(Math.random() * select.length);
    const randomValue = select[randomIndex];
      
    //console.log("random value:", randomValue);
      
    const max = Math.max(...select);
    const maxIndex = select.indexOf(max);
      
    console.log("result:", maxIndex);
      
    return maxIndex;
  };
    
  const setResult = () => {
    const points = calResult();
    const resultValue = infoList[points];
    console.log(resultValue);

    const url = new URL("/testresult", window.location.href);
    url.searchParams.set("result", resultValue);
  
    // TestResultPage로 페이지 이동
    window.location.href = url.href;
  };

  const goResult = () => {
    const qna = document.querySelector("#qna");

    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";

    setTimeout(() => {
      setResult();
    }, 10);
  };

  useEffect(() => { 
      if (qIdx === endPoint) {
        goResult(); 
      } else {
        const q = qnaList[qIdx].q;
        const answerElements = qnaList[qIdx].a.map((answer, idx) =>
          addAnswer(answer.answer, qIdx, idx)
        );

        setImage(qnaList[qIdx].img);
        setQuestion(q);
        setAnswers(answerElements);
        const status = document.querySelector(".statusBar");
        status.style.width = `${(100 / 11) * (qIdx)}%`;
      }
  }, [qIdx]);

  const addAnswer = (answerText, qIdx, idx) => {
    const handleClick = () => {
      const target = qnaList[qIdx].a[idx].type;
      const updatedSelect = [...select];
      for (let i = 0; i < target.length; i++) {
        updatedSelect[target[i]] += 1;
      }

      setSelect(updatedSelect);
      console.log("Updated Select:", updatedSelect);

      goNext(qIdx + 1);
    };

    return (
        <TestButton
        key={idx}
        onClick={handleClick}
        style={{ display: 'flex', flexDirection: 'column' }}
      >
        {answerText}
      </TestButton>
      );
  };

  const goNext = (qIdx) => {
    if (qIdx === endPoint) {
      goResult();
      return;
    }

    const q = document.querySelector(".qBox");

    q.innerHTML = qnaList[qIdx].q;

    const answerElements = qnaList[qIdx].a.map((answer, idx) =>
      addAnswer(answer.answer, qIdx, idx)
    );

    const status = document.querySelector(".statusBar");
    status.style.width = `${(100 / endPoint) * (qIdx + 1)}%`;

    setQIdx(qIdx);
    return answerElements;
  };

  return (
    <div>
      <div>
        {/* 질문화면 section */}
        <Text>
          {qIdx+1}
        </Text>
        <Status className="status mx-auto mt-7">
          <StatusBar className="statusBar"></StatusBar>
        </Status>
        <section id="qna" >
          <Text className="qBox">
            {question}
          </Text>
          <img 
            className="questionImage" 
            src={image} 
            style={{ width: '200px', height: '200px',  display: 'block', margin: '0 auto'}}
          />
          <ButtonContainer>
            {answers}
          </ButtonContainer>
        </section>
      </div>
    </div>
  );
};

export default Test;