import { FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
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
        console.log(result.user);
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
  useEffect(()=>{
    onAuthStateChanged(auth,user=>{
      setUser(user)
    })
  },[])
  const logOut=()=>{
    signOut(auth)
    .then(()=>{})
  }
  return { user,logOut, handleGoogle,handleFacebook ,handleGithub};
};

export default useFirebase;
