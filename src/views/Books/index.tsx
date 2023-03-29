import { FC, memo } from 'react';
import BookCard from '../../components/BookCard';
import useLogic from './logic';
import {BackContainer,ButtonBack,Container,GeneralContainer, Spinner} from './styles';


const Books: FC = () => {
  const { isloading, goToBack, BooksList, goToDetails } = useLogic();

  if (isloading) {
    return (
        <Spinner></Spinner>
    )
  }

  return (
    <GeneralContainer>
      <BackContainer>
        <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      </BackContainer>
      <Container>
        {BooksList.map((book, index) => (
          <div key={index}>
            <BookCard
              id={book.id}
              bookTitle={book.title}
              onClick={goToDetails}
            />
          </div>
        ))}
      </Container>
    </GeneralContainer>
  );
};

export default memo(Books);
