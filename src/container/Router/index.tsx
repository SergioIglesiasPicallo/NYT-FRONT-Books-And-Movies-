import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcome from '../../views/Welcome';
import LoginForm from '../../views/Auth/Login';
import SignupForm from '../../views/Auth/Singup';
import Navbar from '../../components/Navbar';
import { getToken } from '../../services/api/storage';
import { useLocation, Navigate } from 'react-router-dom';
import ProfileView from '../../views/Profile';
import Landing from '../../views/Landing';
import Categories from '../../views/Categories';
import  from '../../views/CategoryDetails';
import Random from '../../views/Random';
import CreationForm from '../../views/Creation';
import Posts from '../../views/Post';
import React from 'react';

const Router: FC = () => {
  const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
    const token = getToken();
    const location = useLocation();

    if (!token) {
      return <Navigate to="/" replace state={{ from: location }} />;
    }
    return children;
  };

  const HandleSession = ({ children }: { children: JSX.Element }) => {
    const token = getToken();
    const location = useLocation();

    if (token) {
      if (
        location.pathname === '/signup' ||
        location.pathname === '/login' ||
        location.pathname === '/'
      ) {
        return <Navigate to="/landing" replace state={{ from: location }} />;
      }
    }
    return children;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HandleSession>
              <Welcome />
            </HandleSession>
          }></Route>
        <Route
          path="/login"
          element={
            <HandleSession>
              <LoginForm />
            </HandleSession>
          }></Route>
        <Route
          path="/signup"
          element={
            <HandleSession>
              <SignupForm />
            </HandleSession>
          }></Route>
        <Route
          path="/landing"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <Landing />
              </>
            </ProtectedRoutes>
          }></Route>
        <Route
          path="/categories"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <Categories />
              </>
            </ProtectedRoutes>
          }></Route>
        <Route
          path="/categories/:id"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <OrdinaryDrinks />
              </>
            </ProtectedRoutes>
          }></Route>
        <Route
          path="/random"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <Random />
              </>
            </ProtectedRoutes>
          }></Route>
        <Route
          path="/creation"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <CreationForm />
              </>
            </ProtectedRoutes>
          }></Route>
        <Route
          path="/post"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <Posts />
              </>
            </ProtectedRoutes>
          }></Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <ProfileView />
              </>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
