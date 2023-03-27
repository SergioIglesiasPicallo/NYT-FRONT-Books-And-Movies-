import React from 'react';
import { FC, useCallback, useState } from 'react';
import {
  Container,
  ContentWrapper,
  Description,
  DetailsButton,
  HeartButton,
  ImageContainer,
  Title,
} from './styles';
import { Props } from './types';

const PostCard: FC<Props> = ({
  title,
  image,
  comment,
  toggleFav,
  id,
  isFavorite,
}) => {
  const [isFav, setIsFav] = useState(isFavorite);
  const handleToggleFav = useCallback(() => {
    setIsFav(!isFav);
    toggleFav(id);
    
  }, [isFav]);
  return (
    <Container>

      <ImageContainer src={image} />
      <ContentWrapper>
      <HeartButton
        className={isFav ? 'active' : ''}
        onClick={handleToggleFav}
      />
        <Title>{title}</Title>
        <Description>{comment}</Description>

        <DetailsButton>Ver detalles</DetailsButton>
      </ContentWrapper>
    </Container>
  );
};
export default PostCard;


