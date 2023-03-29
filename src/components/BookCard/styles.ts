import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  background-color: black;
`;

export const Image = styled.img`
  width: 150px;
  height: 200px;
  margin-top: 40px;
  margin-bottom: 5px;
  border-radius: 6px;
`;

export const Description = styled.p`
  margin-right: 1px;
  font-size: 18px;
  font-family: Oswald;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const DescriptionApi = styled.p`
  display: contents;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.GriffindorRedDark};
`;

export const DetailsButton = styled.button`
  padding: 10px 20px;
  margin: 10px;
  height: 35px;
  width: 150px;
  background-color: ${({ theme }) => theme.colors.white};
  color: black;
  border-radius: 5px;
  text-decoration: none;
  display: inline;
  padding: 5px 5px;
  font-family: Oswald;
  cursor: pointer;
`;

export const EditButton = styled.button`
  padding: 10px 20px;
  font-size: large;
  background-color: ${({ theme }) => theme.colors.DementorBlack};
  color: white;
  border-radius: 5px;
  text-decoration: none;
  display: inline;
  padding: 5px 5px;
  font-family: Oswald;
`;
