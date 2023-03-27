import { FC, Fragment, memo } from "react";
import { GeneralContainer, ButtonBack, CategoryContainer, Container } from "./styles";
import useLogic from "./logic";
import { BackContainer } from "../Categories/styles";
import CategoryCard from "../../components/GeneralCard";
import React from "react";

const CategoryDetails: FC = () => {
  const {
    isLoading,
    cocktails,
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
        {cocktails.map((cocktail) => (
          <Fragment key={cocktail.id}>
            <CategoryCard
              id={cocktail.id}
              name={cocktail.name}
              image={cocktail.image}
            />
          </Fragment>
        ))}
      </Container>
    </GeneralContainer>
  );
};

export default memo(CategoryDetails);
