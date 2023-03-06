/* src/routes/sign-in/sign-in.component.tsx */
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
        // response from firebase with 'accessToken' and many more
        // with this accessToken we can perform CRUD operation.
    };
    return (
        <div>
            <p>Sign in page</p>
            <button onClick={logGoogleUser}>Sign in with google</button>
        </div>
    );
};

export default SignIn;
