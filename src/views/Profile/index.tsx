import { FC, useState, useCallback, useEffect, memo } from "react";
import {ButtonBack,ButtonContainer,Container,FavoriteContainer,GeneralContainer,Info, Spinner} from "./styles";
import { getUserInfo } from "../../services/api/profile";
import type { Profile } from "../../models/profile";
import { useNavigate } from "react-router-dom";


const ProfileView: FC = () => {
  
  const [userinfo, setUserInfo] = useState<Profile | null>(null);
  const [isloading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const getProfileList = useCallback(async () => {
    setIsLoading(true);
    const userprofile = await getUserInfo();
    setUserInfo(userprofile);
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);  }, []);

  const goToBack = useCallback(() => {
    navigate("/landing", { replace: true });
  }, [navigate]);

  useEffect(() => {
    getProfileList();
  }, [getProfileList]);

  if (isloading) {
    return (
      <Spinner></Spinner>
    )
  }

  return (
    <GeneralContainer>
      <ButtonContainer>
        <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
      </ButtonContainer>
      <Container>
        <Info>Name: {userinfo?.name}</Info>
        <Info>ID: {userinfo?.id}</Info>
        <Info>EMAIL: {userinfo?.email}</Info>
      </Container>
      <FavoriteContainer>❤️ 👇 Your Favorites 👇 ❤️</FavoriteContainer>
    </GeneralContainer>
  );
};

export default memo(ProfileView);