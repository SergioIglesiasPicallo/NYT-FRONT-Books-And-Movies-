import { FC, memo } from 'react';
import Card from '../../components/Card';
import useLogic from './logic';
import {BackContainer,ButtonBack,Container,GeneralContainer} from './styles';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

const Categories: FC = () => {
  const { isloading, goToBack, categoryList, goToDetails } = useLogic();

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
      </BackContainer>
      <Container>
        {categoryList.map((category, index) => (
          <div key={index}>
            <Card
              id={category.id}
              categoryName={category.category}
              onClick={goToDetails}
            />
          </div>
        ))}
      </Container>
    </GeneralContainer>
  );
};

export default memo(Categories);
