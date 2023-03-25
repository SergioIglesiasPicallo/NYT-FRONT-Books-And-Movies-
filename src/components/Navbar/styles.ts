import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Signout = styled.span`
  color: white;
  font-family: Oswald;
  margin: 10px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.White};
  transition: all 0.3s ease-in-out;
  &:hover {
    text-decoration: underline;
    transform: translateY(-5px);
  }
`;


export const Profile = styled.span`
  color: white;
  font-family: Oswald;
  margin: 10px;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.White};
  transition: all 0.3s ease-in-out;
  &:hover {
    text-decoration: underline;
    transform: translateY(-5px);
  }
`;
/* font-family: Oswald;
  width: 100px;
  height: 30px;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  background: linear-gradient(315deg, #E8A808 0%, #DD1103 74%);
  color: ${({ theme }) => theme.colors.White};
  border: none;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: translateY(-3px);
  }
`; */

export const Tittle = styled(Link)`
  padding-bottom: 16px;
  margin: 16px;
  color: ${({ theme }) => theme.colors.White};
  font-family: ${({ theme }) => theme.font.MyFont};
  text-decoration: none;
  font-size: 30px;
  &:hover {
    color: ${({ theme }) => theme.colors.LightGreen};
  }
`;

export const Logo = styled.div`
  background-image: url('https://i.ibb.co/6ywQBhV/Logo-COK.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 70px;
  height: 70px;
`;

export const CustomNavbar = styled.nav`
  background-color: ${({ theme }) => theme.colors.DemetorBlack100};
  display: flex;
  justify-content: space-between;
  height: 90px;
  width: 100%;

  //responsive
  @media (max-width: 768px) {
    /* Estilos para pantallas más pequeñas que 768px */
    /* Ajustar tamaño de botones */
    ${Profile}, ${Signout} {
      width: 80px;
      height: 25px;
      font-size: 12px;
      padding: 10px;
      margin: 5px;
    }
    /* Ajustar tamaño de título */
    ${Tittle} {
      font-size: 20px;
    }
  }
`;
