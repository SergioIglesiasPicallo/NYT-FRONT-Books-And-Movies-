import styled from 'styled-components';
export const GeneralContainer = styled.div`
  text-align: center;
  padding-top: 60px;
  background-color: #282c34;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
  background-image: url('https://p4.wallpaperbetter.com/wallpaper/900/861/277/space-1920x1080-earth-wallpaper-preview.jpg');
  background-repeat: no-repeat;
  background-size: cover
`;
export const Container = styled.div`
  width: 70%;
  padding: 5em;
  padding-top: 5px;
  padding-bottom: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr; // Ajusta el tamaño de las columnas del grid
  gap: 24px;
`;
export const BackContainer = styled.div`
  display: flex;
`;

export const SyncButton = styled.button`
  width: 90px;
  height: 50px;
  border-radius: 5px;
  margin: 10px;
  font-family: oswald;
  color: white;
  cursor: pointer;
  background: linear-gradient(315deg, #000000 0%, #282c34 74%);
`;

export const DeleteButton = styled.button`
  width: 70px;
  height: 25px;
  border-radius: 5px;
  margin: 2px;
  cursor: pointer;
  background: linear-gradient(315deg, #9d523c 0%, #f2a65a 74%);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonBack = styled.button`
  position: absolute;
  top: 90px;
  left: 10px;
  width: 90px;
  height: 40px;
  border-radius: 5px;
  margin: 10px;
  font-family: oswald;
  cursor: pointer;
  background: linear-gradient(315deg, #ffffff 0%, #ffffff 74%);
`;
