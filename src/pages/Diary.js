import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";

import { emotionList } from "../util/emotion";
import { getStringDate } from "../util/date";

import styled from "styled-components";

const Diary = () => {
  const { id } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const navigate = useNavigate();

  const [data, setData] = useState();

  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `감정 일기장 - ${id}번 일기`;
  }, []);

  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find(
        (it) => parseInt(it.id) === parseInt(id)
      );
      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        navigate("/", { replace: true });
      }
    }
  }, [id, diaryList]);

  if (!data) {
    return <div>로딩중...</div>;
  } else {
    const curEmotionData = emotionList.find(
      (it) => parseInt(it.emotion_id) === parseInt(data.emotion)
    );

    return (
      <DiaryWrap>
        <Header
          headText={`${getStringDate(new Date(data.date))}의 기록`}
          leftChild={
            <Button text={"< 뒤로가기"} onClick={() => navigate(-1)} />
          }
          rightChild={
            <Button
              text={"수정하기"}
              onClick={() => navigate(`/edit/${data.id}`)}
            />
          }
        />

        <article>
          <section>
            <p>오늘의 감정</p>
            <EmotionImgBox
              className={[
                "diary_img_wrapper",
                `diary_img_wrapper_${data.emotion}`,
              ]}
            >
              <img src={curEmotionData.emotion_img} alt="img" />
              <div>{curEmotionData.emotion_descript}</div>
            </EmotionImgBox>
          </section>

          <section>
            <p>오늘의 일기</p>
            <DiaryContentWrap>
              <p>{data.content}</p>
            </DiaryContentWrap>
          </section>
        </article>
      </DiaryWrap>
    );
  }
};

export default Diary;

export const DiaryWrap = styled.div`
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 100%;
    margin-bottom: 100px;
  }

  p {
    margin: 50px 0;
    font-size: 22px;
    font-weight: bold;
  }
`;

export const EmotionImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 250px;
  height: 250px;
  background-color: #ececec;
  border-radius: 5px;

  div {
    color: #fff;
    font-size: 25px;
  }
`;

export const EmotionText = styled.div`
  font-size: 25px;
`;

export const DiaryContentWrap = styled.div`
  width: 100%;
  background-color: #ececec;
  border-radius: 5px;
  word-break: keep-all;
  overflow-wrap: break-word;

  p {
    padding: 20px;
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    line-height: 2.5;
  }
`;
