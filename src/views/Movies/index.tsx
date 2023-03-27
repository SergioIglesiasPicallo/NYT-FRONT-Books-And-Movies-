import { FC, Fragment, memo } from "react";
import { GeneralContainer, ButtonBack, CategoryContainer, Container } from "./styles";
import useLogic from "./logic";
import { BackContainer } from "../Movies/styles";
import CategoryCard from "../../components/GeneralCard";
import React from "react";

const MovieDetails: FC = () => {
  const {
    isLoading,
    Movies,
    movieName,
    goToBack
  } = useLogic()
  

  if (isLoading) {
    return <p>LOADING</p>;
  }

console.log(movieName)

  return (
    <GeneralContainer>
      <BackContainer>
      <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      </BackContainer>
      <CategoryContainer>
      <div>{movieName}</div>
      </CategoryContainer>
      <Container>
        {Movies.map((movie) => (
          <Fragment key={movie.id}>
            <CategoryCard
              id={movie.id}
              name={movie.name}
              image={movie.image}
            />
          </Fragment>
        ))}
      </Container>
    </GeneralContainer>
  );
};

export default memo(MovieDetails);
