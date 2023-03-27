import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  height: 420px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

export const ContentWrapper = styled.div`
  padding: 15px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 10px;
  color: black;
  font-family: oswald;
`;

export const Description = styled.p`
  font-size: 16px;
  margin: 0 0 15px;
  color: black;
  font-family: oswald;
`;

export const Author = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 10px;
`;

export const DetailsButton = styled.button`
  background-color: #0d6efd;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0b5ed7;
  }
`;

export const HeartButton = styled.button`
  background-image: url('https://rithmi.com/wp-content/uploads/2021/05/png-transparent-computer-icons-heart-outline-love-text-heart.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  border-radius: 20px;
  width: 30px;
  height: 30px;
  cursor: pointer;

  &.active {
    filter: invert(43%) sepia(50%) saturate(566%) hue-rotate(348deg) brightness(100%) contrast(114%);
  }
`;

export const TrashButton = styled.button`
  background-image: url('https://i.ibb.co/pf8sPDS/icons8-papelera-llena-50.png');
  background-size: contain;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;