import { auth, provider } from '../../config/firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate, Navigate } from 'react-router-dom'; 
import { useGetUserInfo } from "../../hooks/useGetUserInfo.js";
import "./styles.css";

export const Authentication = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const signInWithGoogle = async () => {
      const results = await signInWithPopup(auth, provider);
      const authInfo = {
          userID: results.user.uid,
          name: results.user.displayName || '',
          profilePhoto: results.user.photoURL || '',
          isAuth: true,
      };
      // Local storage has to be a string   
      localStorage.setItem('auth', JSON.stringify(authInfo));
      // To navigate/'redirect' on sign-in/authentication to the app page automatically using Router.
      navigate("/expense-tracker");
  };

  if (isAuth) {
    return <Navigate to="/expense-tracker" />;
  }
  
  return (
    <div className="login-page">
      <p>Sign in with Google to continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}> 
        {" "}
        Sign in with Google
      </button>
    </div>
  );
};