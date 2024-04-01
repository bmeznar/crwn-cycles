import { signInWithGooglePopup, createUserDocFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    
    const userDocRef = await createUserDocFromAuth(user);
  }

  return (
    <div>
      Sign in page
      <button onClick={logGoogleUser}>
        sign in with google
      </button>
    </div>
  )
}

export default SignIn;