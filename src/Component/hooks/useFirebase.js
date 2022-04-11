import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import app from "../../firebase.init";

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleFacebook=()=>{
    signInWithPopup(auth, facebookProvider)
    .then((result) => {
      setUser(result.user);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  const handleGithub=()=>{
    signInWithPopup(auth, githubProvider)
    .then((result) => {
        setUser(result.user);
    }).catch((error) => {
      console.log(error);
    });
      
  }
  return { user, handleGoogle,handleFacebook ,handleGithub};
};

export default useFirebase;
