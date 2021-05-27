import { FunctionComponent } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { firebase } from "../../../initFirebase";

const authConfig = {
  signInFlow: "popup",
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      requireDisplayName: true,
    },
  ],
  signInSuccessUrl: "/",
};

const SignIn: FunctionComponent = () => {
  return <div>
    <StyledFirebaseAuth uiConfig={authConfig} firebaseAuth={firebase.auth()} />
  </div>;
}

export default SignIn;