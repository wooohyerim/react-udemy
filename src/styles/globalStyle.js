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
}`;

export default GlobalStyle;
