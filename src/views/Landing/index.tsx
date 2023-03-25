import React from 'react';
import { FC, useCallback, useState } from 'react';
import { syncCategories } from '../../services/api/selection';
import {
  ButtonBoxes,
  SyncButton,
  WelcomeButton,
  WelcomeContainer,
  WelcomeMessage,
} from './styles';

const Landing: FC = () => {
  const [isloading, setIsLoading] = useState<boolean>(false);
  const syncData = useCallback(async () => {
    await syncCategories();
    setIsLoading(false);
  }, []);
  if (isloading) {
    return <h1>LOADING</h1>;
  }
  return (
    <WelcomeContainer>
      <SyncButton onClick={syncData}>Sync Categories</SyncButton>
      <WelcomeMessage>Select the desired info</WelcomeMessage>
      <ButtonBoxes>
        <WelcomeButton to="/categories">Categories</WelcomeButton>
        <WelcomeButton to="/random">Get Random Cocktail!</WelcomeButton>
        <WelcomeButton to="/creation">Post your cocktail</WelcomeButton>
        <WelcomeButton to="/post">All Post</WelcomeButton>
      </ButtonBoxes>
    </WelcomeContainer>
  );
};

export default Landing;
