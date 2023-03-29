import { FC, memo } from 'react';
import {
  GeneralContainer,
  BackContainer,
  ButtonBack,
  Container,
  TrashButton,
} from './styles';
import PostCard from '../../components/PostCard';
import useLogic from './logic';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { WelcomeButton } from '../LandingPage/styles';


const Post: FC = () => {
  const { goToBack, posts, isloading, removePost, toggleFavorite } = useLogic();

  if (isloading) {
    return (
      <Stack sx={{ width: '50%', color: 'grey.500', marginTop:'10rem',margin:'0 auto' }} spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
    )
  }

  return (
    <GeneralContainer>
      <BackContainer>
        <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
        <WelcomeButton to="/creation">Post your cocktail</WelcomeButton>
      </BackContainer>
      <Container>
        {posts.map((post, index) => (
          <div key={index}>
            <PostCard
              title={post.title}
              image={post.image}
              comment={post.comment}
              id={post.id}
              toggleFav={toggleFavorite}
              isFavorite={post.isFav}
            />
            <TrashButton onClick={()=> removePost(post.id)} />
          </div>
        ))}
      </Container>
    </GeneralContainer>
  );
};

export default memo(Post);
