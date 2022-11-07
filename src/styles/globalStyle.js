import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Dosis&family=Poor+Story&family=Roboto&display=swap');

${reset}

*{
  box-sizing: border-box;

  font-family: 'Dosis', sans-serif;
  font-family: 'Poor Story', cursive;

}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background-color: #f6f6f6;
  font-family: 'Poor Story', cursive;
}

@media (min-width: 650px){
  .App {
    width:640px;
  }
}

@media (max-width: 650px){
  .App {
    width:90vw;
  }
}

#root{
  background-color: #fff;
  box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
}

.App{
  min-height: 100vh;
  padding: 0 20px;
}

//Button
.Button {

  padding: 10px 20px;
  border:none;
  border-radius: 5px;
  font-size: 18px;
  font-family:'Poor Story', cursive;
  white-space: nowrap;
  cursor: pointer;
}

.Button_default {
background-color: #ececec;
color:#000;
}

.Button_positive {
  background-color: lightgreen;
  color: #fff;
}

.Button_negative {
  background-color: #fd565f;
  color:#fff;
}

//Header
header {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  padding: 20px 0;
}

header > div {
  display: flex;
}

header .head_text {
  justify-content: center;
  width: 50%;
  font-size: 25px;
}

header .head_btn_left {
  justify-content: flex-start;
  width: 25%;
}

header .head_btn_right {
  justify-content: flex-end;
  width: 25%;
}

header button {
  font-family: 'Dosis', sans-serif;
}


//EmotionItem
.EmotionItem_off {
  background-color: #ececec;
}

.EmotionItem_on_1 {
  background-color: #64c964;
  color:#fff;
}

.EmotionItem_on_2 {
  background-color: #9dd772;
  color:#fff;
}

.EmotionItem_on_3 {
  background-color: #fdce17;
  color:#fff;
}

.EmotionItem_on_4 {
  background-color: #fd8446;
  color:#fff;
}

.EmotionItem_on_5 {
  background-color: #fd565f;
  color:#fff;
}
`;

export default GlobalStyle;
