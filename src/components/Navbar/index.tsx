import { FC } from 'react';
import { Props } from './types';
import { useLocation, useNavigate } from 'react-router-dom';
import {ContainerButton,Logoimg,ProfileButton,SignoutButton,Tittle} from '../../components/Navbar/styles';
import { CustomNavbar } from './styles';
import 'font-awesome/css/font-awesome.min.css';
import { FaUser } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa';

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
          <Logoimg></Logoimg>
        </Tittle>
        <ContainerButton>
          {!isProfilePage && isCurrentPageProfile ? null: (
          <ProfileButton onClick={handleProfile}>
            <FaUser />
            Profile
          </ProfileButton>)}
          <SignoutButton onClick={handleSignOut}>
            <FaSignOutAlt />
            LogOut
          </SignoutButton>
        </ContainerButton>
      </CustomNavbar>
    </>
  );
};

export default Navbar;
