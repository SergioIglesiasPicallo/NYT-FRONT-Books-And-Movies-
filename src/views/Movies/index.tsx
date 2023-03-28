import { FC, Fragment, memo } from "react";
import { GeneralContainer, ButtonBack, CategoryContainer, Container } from "./styles";
import useLogic from "./logic";
import { BackContainer } from "./styles";
import CategoryCard from "../../components/GeneralCard";
import React from "react";

const CategoryDetails: FC = () => {
  const {
    isLoading,
    movies,
    categoryName,
    goToBack
  } = useLogic()
  

  if (isLoading) {
    return <p>LOADING</p>;
  }

  console.log(categoryName)

  return (
    <GeneralContainer>
      <BackContainer>
        <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      </BackContainer>
      <CategoryContainer>
        <div>{categoryName}</div>
      </CategoryContainer>
      <Container>
        {movies.map((movie) => (
          <Fragment key={movie.id}>
            <CategoryCard
              id={movie.id}
              name={movie.title}
              image={movie.link}
            />
          </Fragment>
        ))}
      </Container>
    </GeneralContainer>
  );
};

export default memo(CategoryDetails);
