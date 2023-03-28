import { FC, Fragment, memo } from "react";
import { GeneralContainer, ButtonBack, CategoryContainer, Container } from "./styles";
import useLogic from "./logic";
import { BackContainer } from "../Categories/styles";
import CategoryCard from "../../components/GeneralCard";
import React from "react";

const CategoryDetails: FC = () => {
  const {
    isLoading,
    books,
    bookName,
    goToBack
  } = useLogic()
  

  if (isLoading) {
    return <p>LOADING</p>;
  }

  console.log(bookName)

  return (
    <GeneralContainer>
      <BackContainer>
        <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      </BackContainer>
      <CategoryContainer>
        <div>{bookName}</div>
      </CategoryContainer>
      <Container>
        {books.map((book) => (
          <Fragment key={book.id}>
            <CategoryCard
              id={book.id}
              name={book.name}
              image={book.image}
            />
          </Fragment>
        ))}
      </Container>
    </GeneralContainer>
  );
};

export default memo(CategoryDetails);
