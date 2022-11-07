import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const DiaryItem = ({ id, emotion, content, date }) => {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";

  const navigate = useNavigate();

  const strDate = new Date(parseInt(date)).toLocaleDateString();

  const goToDetail = () => {
    navigate(`/diary/${id}`);
  };

  const goToEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <ItemBox>
      <EmotionBox
        className={[
          "emotion_img_wrapper",
          `emotion_img_wrapper_${emotion}`,
        ].join(" ")}
        onClick={goToDetail}
      >
        <img
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          alt="emotion"
        />
      </EmotionBox>
      <InfoBox onClick={goToDetail}>
        <DiaryDate>{strDate}</DiaryDate>
        <DiaryContent>{content.slice(0, 25)}</DiaryContent>
      </InfoBox>
      <BtnBox>
        <Button onClick={goToEdit} text={"수정하기"} />
      </BtnBox>
    </ItemBox>
  );
};

export default DiaryItem;

export const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid #e2e2e2;
`;

export const EmotionBox = styled.div`
  display: flex;
  justify-content: center;
  min-width: 120px;
  height: 80px;
  border-radius: 5px;
  cursor: pointer;
`;

export const InfoBox = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  cursor: pointer;
`;

export const DiaryDate = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 25px;
`;

export const DiaryContent = styled.div`
  font-size: 18px;
  font-family: "Dosis", sans-serif;
`;

export const BtnBox = styled.div`
  min-width: 70px;
`;
