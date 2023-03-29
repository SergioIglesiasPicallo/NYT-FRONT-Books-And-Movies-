import { FC } from "react";
import { Container, Description, ImageContainer } from "./styles";
import { Props } from "./types";

const RandomCard: FC<Props> = ({
  image,
  name,
  category,
  
  
}) => {
  return (
    <Container>
      <ImageContainer src={image} />
      <Description> {name} </Description>
      <Description> Category drink → {category} </Description>
    </Container>
  );
};

export default RandomCard;
