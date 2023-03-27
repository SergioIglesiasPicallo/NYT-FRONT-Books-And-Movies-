import React from "react";
import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Description, DetailsButton } from "./styles";
import { Props } from "./types";

const Card: FC<Props> = ({ id, category }) => {
  const navigate = useNavigate();

  const goToDetails = useCallback(() => {
    navigate(`/categories/${id}`, { replace: true, state:{name:category} });
  }, [category, id, navigate]);

  return (
    <Container>
      <Description> {category} </Description>
      <DetailsButton onClick={goToDetails}>Go to {category}:</DetailsButton>
    </Container>
  );
};

export default Card;
