// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";
// import {
//   auth,
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
//   createUserDocumentFromAuth,
// } from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  // useEffect(() => {
  // const response = await getRedirectResult(auth);
  // if (response) {
  //   const userDocRef = await createUserDocumentFromAuth(response.user);
  // }
  //   getRedirectResult(auth)
  //     .then((result) => {
  //       console.log(result);
  //       if (result) {
  //         const userDocRef = createUserDocumentFromAuth(result.user);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error found", error);
  //     });
  // }, []);
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();

  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log({ user });
  // };

  return (
    <div className="authentication-container">
      {/* <h1>SignIn in page</h1> */}
      <SignInForm />
      {/* <button onClick={logGoogleUser}>Sign in with google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button> */}
      <SignUpForm />
    </div>
  );
};

export default Authentication;
