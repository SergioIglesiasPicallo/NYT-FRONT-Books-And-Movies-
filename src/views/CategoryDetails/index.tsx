import { FC, Fragment, memo } from "react";
import { GeneralContainer, ButtonBack, CategoryContainer, Container } from "./styles";
import useLogic from "./logic";
import { BackContainer } from "../Categories/styles";
import CategoryCard from "../../components/CategoryCard";
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';


const CategoryDetails: FC = () => {
  const {
    isloading,
    books,
    categoryName,
    goToBack
  } = useLogic()
  

  if (isloading) {
    return (
      <Stack sx={{ width: '50%', color: 'grey.500', marginTop:'10rem',margin:'0 auto' }} spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
    )
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
        {books.map((book) => (
          <Fragment key={book.id}>
            <CategoryCard
              id={book.id} 
              name={book.title}
              image={book.url}
            />
          </Fragment>
        ))}
      </Container>
    </GeneralContainer>
  );
};

export default memo(CategoryDetails);
