import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white500};
  background-image: url('https://i.pinimg.com/736x/8d/87/05/8d870514b7ed689d6164e734f691955c.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const WelcomeMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 28vh;
  font-size: 70px;
  font-family: url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300&display=swap');
  margin-top: 20px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.colors.white100};
`;

export const RedirectMessage = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonBoxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  top: -50px;
  & > * {
    width: 50%;
    max-width: 250px;
  }
`;

export const WelcomeButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.DemetorBlack100};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.white100};
  font-family: Oswald;
  font-size: 20px;
  height: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  padding: 120px 80px;
  text-decoration: none;
  background-image: url('https://i.ibb.co/h977WdD/COCKTAILS-APP-Mesa-de-trabajo-1.png');
  background-repeat: no-repeat;
  background-position: bottom;
  /* background-size: 200px 200px; Establecer un tamaño específico */
  /* background-position: center center; Centrar la imagen de fondo */
  /* Efecto de iluminación */
  &:hover {
    box-shadow: 0 0 10px 10px #f2a65a;
    transform: scale(1.05);
    transition: box-shadow 0.5s ease, transform 0.5s ease;
  }
`;
export const SyncButton = styled.button`
  margin: auto;
  margin-top: 10px;
  position: absolute;
  width: 90px;
  height: 50px;
  border-radius: 5px;
  font-family: oswald;
  color: white;
  cursor: pointer;
  background: linear-gradient(315deg, #000000 0%, #282c34 74%);
`;
