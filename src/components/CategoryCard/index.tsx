import { FC } from "react";
import {Container,Description,ImageContainer} from "./styles";
import { Props } from "./types";

const CategoryCard: FC<Props> = ({ id, name, image }) => {
  return (
    <Container>
      <ImageContainer src={image} />
      <Description> ID: {id} </Description>
      <Description> {name} </Description>
    </Container>
  );
};

export default CategoryCard;
