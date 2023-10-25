import { auth, provider } from '../../config/firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 

import "./styles.css";

export const Authentication = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const results = await signInWithPopup(auth, provider);
        const authInfo = {
            userID: results.user.uid,
            name: results.user.displayName,
            profilePhoto: results.user.photoURL,
            isAuth: true,
        };
        // Local storage has to be a string   
        localStorage.setItem('auth', JSON.stringify(authInfo));
        // To navigate/'redirect' on sign-in/authentication to the app page automatically using Router.
        navigate('/expense-tracker');
        console.log(results);
    }
    return (
        <div className="login-page">
          <p>Sign in with Google to continue</p>
          <button className="login-with-google-btn" onClick={signInWithGoogle}> 
            {" "}
            Sign in with Google!
          </button>
        </div>
    );
};