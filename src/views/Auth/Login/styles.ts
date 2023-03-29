import styled, { css } from "styled-components";
import { Form as DefaultForm } from "formik";

export const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.CoolBlue};
  background-image: url("https://fondosmil.com/fondo/47841.png");
  background-size: cover;
`;

export const Form = styled(DefaultForm)`
  display: flex;
  flex-direction: column;
  border: 2px solid white;
  background-color: ${({ theme }) => theme.colors.CoolBlue} ;
  border-radius: 10px;
  height: 25rem;
  width: 22.5rem;
  margin-top: 6.25rem;
  margin-left: 2rem;
  margin-right: 1.7rem;
  font-family: Oswald;
  color: ${({ theme }) => theme.colors.white100};
`;

export const DivError = styled.span`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-flow: column;
  color: ${({ theme }) => theme.colors.white100};
  &:not(:first-child) {
    margin-top: 16px;
  }
`;

export const Input = styled.input<{ $hasError?: boolean }>`
  padding: 10px;
  margin: 10px;
  border: none; /* eliminar el borde predeterminado */
  border-bottom: 1px solid ${({ theme }) => theme.colors.white100}; /* agregar borde inferior */
  background: transparent; /* hacer el fondo transparente */
  color: ${({ theme }) =>
    theme.colors.white100}; /* establecer el color de texto */
  padding: 10px 14px;

  ${({ $hasError, theme }) =>
    $hasError &&
    css`
      color: ${theme.colors.grey100};
      border-bottom-color: ${theme.colors
        .grey100}; /* agregar borde inferior amarillo cuando hay un error */
    `}
`;

export const Label = styled.label`
  color: gray;
  font-size: 16px;
  font-weight: bold;
  margin: 16px;
  color: ${({ theme }) => theme.colors.white100};
`;

export const FormButton = styled.button`
  border-radius: 5px;
  cursor: pointer;
  margin: 16px;
  padding: 5px;
  font-family: Oswald;
  background-color: ${({ theme }) => theme.colors.white100};
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
`;

export const FormMessage = styled.p`
  align-items: center;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white100};
`;

export const Error = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
  margin-left: 15px;
  color: ${({ theme }) => theme.colors.danger};
`;

export const Return = styled.p`
  color: red;
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
  margin-left: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white100};
`;

export const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.white100};
`;
