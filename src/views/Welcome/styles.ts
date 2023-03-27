import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

export const WelcomeVideo = styled.video`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`;

export const WelcomeMessage = styled.h1`
  font: ${({ theme }) => theme.font.MyFont};
  color: ${({ theme }) => theme.colors.black};
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 2.5rem;
  }
`;

export const RedirectMessage = styled.p`
  color: ${({ theme }) => theme.colors.black};
  @media only screen and (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
    margin: 0.5rem;
  }
`;

export const ButtonBoxes = styled.div`
  display: block;
  margin: 20px;
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const WelcomeButtonLogin = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-image: url('https://cdn-icons-png.flaticon.com/512/9735/9735723.png');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background-color 0.3s ease, opacity 0.3s ease;
  margin-left: 10px;
  text-decoration: none;
  position: relative;

  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.9);
    opacity: 0.9;
  }

  span {
    position: absolute;
    color: #000;
    font-size: 19px;
    font-weight: bold;
    font-family: oswald;
    text-align: center;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const WelcomeButtonSignup = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-image: url('https://cdn-icons-png.flaticon.com/512/9735/9735723.png');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background-color 0.3s ease, opacity 0.3s ease;
  margin-left: 10px;
  text-decoration: none;
  position: relative;

  &:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.9);
    opacity: 0.9;
  }

  span {
    position: absolute;
    color: #000;
    font-size: 19px;
    font-weight: bold;
    font-family: oswald;
    text-align: center;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;
