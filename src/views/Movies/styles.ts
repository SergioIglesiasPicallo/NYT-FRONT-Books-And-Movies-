import styled from 'styled-components';

export const GeneralContainer = styled.div`
  text-align: center;
  padding-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: white;
  justify-content: flex-start;
  background-image: url('https://i.ibb.co/FxKbYzw/peakpx.jpg');
  background-repeat: repeat-y;
`;

export const CategoryContainer = styled.div`
  padding: 5em;
  padding-top: 5px;
  padding-bottom: 25px;
`;

export const Container = styled.div`
  padding: 5em;
  padding-top: 5px;
  padding-bottom: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 24px;
`;

export const Image = styled.img`
  width: 175px;
  height: 250px;
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
