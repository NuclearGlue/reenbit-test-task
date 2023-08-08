import axios from 'axios';
import { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {
  GoogleLoginMain,
  GoogleLoginButton,
  GoogleProfile,
  GoogleLogoutButton,
  GoogleLoginInfo,
  GoogleLoginImg,
} from './GoogleLoginBlock.styled';

export const GoogleLoginBlock = () => {
  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState(
    !localStorage.getItem('profile')
      ? null
      : JSON.parse(localStorage.getItem('profile')),
  );

  const login = useGoogleLogin({
    onSuccess: codeResponse => setUser(codeResponse),
    onError: error => console.log('Login Failed:', error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json',
            },
          },
        )
        .then(res => {
          setProfile(res.data);
          return res.data;
        })
        .then(data => {
          JSON.parse(localStorage.setItem('profile', JSON.stringify(data)));
        })
        .catch(err => console.log(err));
    }
  }, [user]);

  const logOut = () => {
    googleLogout();
    localStorage.removeItem('profile');
    setProfile(null);
  };

  return (
    <GoogleLoginMain>
      {profile !== null ? (
        <GoogleProfile>
          <GoogleLoginImg src={profile.picture} alt="user" />
          <GoogleLoginInfo>Name: {profile.name}</GoogleLoginInfo>
          <GoogleLoginInfo>Email Address: {profile.email}</GoogleLoginInfo>
          <GoogleLogoutButton onClick={logOut}>Log out</GoogleLogoutButton>
        </GoogleProfile>
      ) : (
        <GoogleLoginButton onClick={() => login()}>
          Sign in with Google
        </GoogleLoginButton>
      )}
    </GoogleLoginMain>
  );
};
