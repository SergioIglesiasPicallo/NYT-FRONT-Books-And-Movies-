import { FC, useCallback, useState } from 'react';
import {Container,ContentWrapper,Description, HeartButton,ImageContainer,Title,} from './styles';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      </ContentWrapper>
    </Container>
  );
};
export default PostCard;