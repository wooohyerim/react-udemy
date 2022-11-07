import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";

import Header from "./Header";
import Button from "./Button";
import styled from "styled-components";
import EmotionItem from "./EmotionItem";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
    emotion_descript: "완전 좋음",
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion2.png`,
    emotion_descript: "좋음",
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion3.png`,
    emotion_descript: "그럭저럭",
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion4.png`,
    emotion_descript: "나쁨",
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,
    emotion_descript: "완전 나쁨",
  },
];

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};

const DiaryEditor = () => {
  const contentRef = useRef();

  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);

  const handleClickEmotion = (emotion) => {
    setEmotion(emotion);
  };

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    onCreate(date, content, emotion);
    navigate("/", { replace: true });
  };

  return (
    <EditorBox>
      <Header
        headText={"새 일기쓰기"}
        leftChild={
          <Button
            text={"< 뒤로가기"}
            onClick={() => {
              navigate(-1);
            }}
          />
        }
      />
      <div>
        <section>
          <EditorTitle>오늘은 언제인가요?</EditorTitle>
          <div>
            <InputDate
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </section>
        <section>
          <EditorTitle>오늘의 감정</EditorTitle>
          <EmotionListBox>
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmotion}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </EmotionListBox>
        </section>
        <section>
          <EditorTitle>오늘의 일기</EditorTitle>
          <TextBox>
            <textarea
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="오늘은 어떤가요"
            />
          </TextBox>
        </section>
        <BtnBox>
          <Button text={"취소하기"} onClick={() => navigate(-1)} />
          <Button text={"작성완료"} type={"positive"} onClick={handleSubmit} />
        </BtnBox>
        <section></section>
      </div>
    </EditorBox>
  );
};

export default DiaryEditor;

export const EditorBox = styled.div`
  section {
    margin-bottom: 40px;
  }
`;

export const EditorTitle = styled.p`
  margin: 20px 0;
  font-weight: bold;
  font-size: 22px;
`;

export const InputDate = styled.input`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ececec;
  font-size: 20px;
  cursor: pointer;
`;

export const EmotionListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 2%;
`;

export const TextBox = styled.div`
  textarea {
    width: 100%;
    min-height: 200px;
    padding: 20px;
    resize: vertical;
    border: none;
    border-radius: 5px;
    background-color: #ececec;
    font-size: 20px;
    font-family: "Dosis", sans-serif;
    box-sizing: border-box;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
