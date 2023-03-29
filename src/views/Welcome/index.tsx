import { FC } from "react";
import {
  ButtonBoxes,
  RedirectMessage,
  WelcomeButtonLogin,
  WelcomeButtonSignup,
  WelcomeContainer,
  WelcomeMessage,
  //WelcomeVideo,

} from "./styles";

const Welcome: FC = () => {
  return (
    <WelcomeContainer>
      
      <WelcomeMessage>
        <h1>WELCOME NEW YORK TIMES & MOVIES APP</h1>
      </WelcomeMessage>
      <RedirectMessage>
        <h2>Please Login or Signup</h2>
      </RedirectMessage>
      <ButtonBoxes>
        <WelcomeButtonLogin to="/login"><span>LOGIN</span></WelcomeButtonLogin>
        <WelcomeButtonSignup to="/signup"><span>SIGNUP</span></WelcomeButtonSignup>
      </ButtonBoxes>
    </WelcomeContainer>
  );
};

export default Welcome;
