import React from "react";
import styled from "styled-components";

const EmotionItem = ({
  emotion_id,
  emotion_img,
  emotion_descript,
  onClick,
  isSelected,
}) => {
  return (
    <EmotionBox
      onClick={() => onClick(emotion_id)}
      className={[
        "EmotionItem",
        isSelected ? `EmotionItem_on_${emotion_id}` : `EmotionItem_off`,
      ].join(" ")}
    >
      <img src={emotion_img} alt="img" />
      <span>{emotion_descript}</span>
    </EmotionBox>
  );
};

export default EmotionItem;

export const EmotionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  border-radius: 5px;
  cursor: pointer;

  img {
    width: 50%;
    margin-bottom: 10px;
  }

  span {
    font-size: 18px;
  }
`;
