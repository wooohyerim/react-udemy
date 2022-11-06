import React from "react";
import styled from "styled-components";

const DiaryItem = ({ id, emotion, content, date }) => {
  return (
    <div>
      <div>
        <img
          src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}
          alt="emotion"
        />
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DiaryItem;
