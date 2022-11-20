import React, {
  useRef,
  useState,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";
import { DiaryDispatchContext } from "../App";

import Header from "./Header";
import Button from "./Button";
import styled from "styled-components";
import EmotionItem from "./EmotionItem";

import { getStringDate } from "../util/date";
import { emotionList } from "../util/emotion";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const DiaryEditor = ({ isEdit, originData }) => {
  const contentRef = useRef();

  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState("");

  const navigate = useNavigate();
  const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);

  const handleClickEmotion = useCallback((emotion) => {
    setEmotion(emotion);
  }, []);

  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?"
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(originData.id, date, content, emotion);
      }
    }

    navigate("/", { replace: true });
  };

  const handleRemove = () => {
    if (window.confirm("일기를 삭제하시겠습니까?")) {
      onRemove(originData.id);
      navigate("/", { replace: true });
    }
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <EditorBox>
      <Header
        headText={isEdit ? "일기 수정하기" : "새 일기쓰기"}
        leftChild={
          <Button
            text={"< 뒤로가기"}
            onClick={() => {
              navigate(-1);
            }}
          />
        }
        rightChild={
          isEdit && (
            <Button
              text={"삭제하기"}
              type={"negative"}
              onClick={handleRemove}
            />
          )
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
