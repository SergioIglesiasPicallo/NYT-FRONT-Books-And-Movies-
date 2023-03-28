import React from "react";
import { FC } from "react";
import {
  ButtonBoxes,
  RedirectMessage,
  WelcomeButtonLogin,
  WelcomeButtonSignup,
  WelcomeContainer,
  WelcomeMessage,
  WelcomeVideo,
} from "./styles";
console.log("hola")
const Welcome: FC = () => {
  return (
    <WelcomeContainer>
      <WelcomeVideo
        autoPlay
        muted
        loop
        playsInline
        src="https://joy1.videvo.net/videvo_files/video/free/video0473/large_watermarked/_import_61ce94e176b116.89574203_preview.mp4"
        className="trailer-video"
      />
      <WelcomeMessage>
        {/* Welcome to Harry Potter Web App */}
        <img
          src="https://fontmeme.com/permalink/230309/9103582b463691b20b9c1339674fb593.png"
          alt=""
        />
      </WelcomeMessage>
      <RedirectMessage>
        {/* Please login or create an account to continue */}
        <img
          src="https://fontmeme.com/permalink/230309/5e10a18ac97b9018ca027ba36c3641db.png"
          alt=""
        />
      </RedirectMessage>
      <ButtonBoxes>
        <WelcomeButtonLogin to="/login"><span>LOGIN</span></WelcomeButtonLogin>
        <WelcomeButtonSignup to="/signup"><span>SIGNUP</span></WelcomeButtonSignup>
      </ButtonBoxes>
    </WelcomeContainer>
  );
};

export default Welcome;
