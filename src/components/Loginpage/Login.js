import React, { useContext } from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// firebase.initializeApp(firebaseConfig);

const Login = () => {
// eslint-disable-next-line
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function (result) {
            const user = result.user;
            setLoggedInUser(user);
            history.replace(from);
        }).catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage)
        });
    }




    return (
        <main className="login-section  d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-1">

                        <form className="login-form">
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" name="Enter email" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="Password" />
                            </div>
                            <p>Forgot Password</p>
                            {/* <input type="submit" className="btn btn-primary" value="Login" /> */}
                            <button className="btn btn-brand">Login</button>
                        </form>
                        <br/>
                        <button className="btn btn-brand" onClick={handleGoogleLogin}>Login With Google</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;