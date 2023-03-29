import { FC, memo } from 'react';
import MovieCard from '../../components/MovieCard';
import useLogic from './logic';
import {BackContainer,ButtonBack,Container,GeneralContainer, Spinner} from './styles';


const Movies: FC = () => {
  const { isloading, goToBack, moviesList, goToDetails } = useLogic();

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
        {moviesList.map((movie, index) => (
          <div key={index}>
            <MovieCard
              id={movie.id}
              movieTitle={movie.title}
              onClick={goToDetails}
            />
          </div>
        ))}
      </Container>
    </GeneralContainer>
  );
};

export default memo(Movies);
