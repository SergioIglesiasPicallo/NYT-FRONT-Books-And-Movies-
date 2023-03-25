import { FC } from 'react';
import { Props } from './types';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ButtonContainer,
  Logo,
  Profile,
  Signout,
  Tittle,
} from '../../components/Navbar/styles';
import { CustomNavbar } from './styles';
import 'font-awesome/css/font-awesome.min.css';
import { FaUser } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';
import React from 'react';

const Navbar: FC<Props> = ({ type = 'list', isProfilePage = false }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = async () => {
    window.localStorage.clear();
    navigate('/');
  };

  const handleProfile = async () => {
    navigate('/profile');
  };

  const isCurrentPageProfile = location.pathname === '/profile';

  return (
    <>
      <CustomNavbar>
        <Tittle to="/landing">
          <Logo></Logo>
        </Tittle>
        <ButtonContainer>
          {!isProfilePage && isCurrentPageProfile ? null: (
          <Profile onClick={handleProfile}>
            <FaUser />
            Profile
          </Profile>)}
          <Signout onClick={handleSignOut}>
            <FaSignOutAlt />
            LogOut
          </Signout>
        </ButtonContainer>
      </CustomNavbar>
    </>
  );
};

export default Navbar;
