import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  background: url("https://p4.wallpaperbetter.com/wallpaper/900/861/277/space-1920x1080-earth-wallpaper-preview.jpg");
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
  color: ${({ theme }) => theme.colors.black};
  font-family: Oswald;
  font-weight: bold;
  font-size: 40px;
  height: 20px;
  margin-bottom: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  padding: 120px 80px;
  text-decoration: none;
  background-image: url('https://img.freepik.com/free-photo/newspaper-background-concept_23-2149501639.jpg?w=2000');
  background-size:cover;
  background-repeat: no-repeat;
  background-position: bottom;
  

  /* Efecto de iluminación */
  &:hover {
    box-shadow: 0 0 10px 10px #037796;
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

export const Spinner = styled.div`

width: 50px;
height: 50px;
border: 5px solid #ccc;
border-top-color: #333;
border-radius: 50%;
animation: spin 1s linear infinite;

@keyframes spin {
to {
  transform: rotate(360deg);
}
` 