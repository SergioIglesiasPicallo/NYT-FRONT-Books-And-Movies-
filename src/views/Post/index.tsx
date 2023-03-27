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
import React from 'react';

const Post: FC = () => {
  const { goToBack, posts, isloading, removePost, toggleFavorite } = useLogic();

  if (isloading) {
    return <div>Loading</div>
  }

  return (
    <GeneralContainer>
      <BackContainer>
        <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
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
