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
import Movies from '../../views/Movies';
import Books from '../../views/Books';
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
          }
        />
        <Route
          path="/login"
          element={
            <HandleSession>
              <LoginForm />
            </HandleSession>
          }
        />
        <Route
          path="/signup"
          element={
            <HandleSession>
              <SignupForm />
            </HandleSession>
          }
        />
        <Route
          path="/landing"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <Landing />
              </>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/categories"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
              </>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/categories/:id"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
              </>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/random"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
              </>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/creation"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <CreationForm />
              </>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/post"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <Posts />
              </>
            </ProtectedRoutes>
          }
        />
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
        <Route
          path="/movies"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <Movies />
              </>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/books"
          element={
            <ProtectedRoutes>
              <>
                <Navbar />
                <Books />
              </>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
