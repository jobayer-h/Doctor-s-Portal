import React, { useContext } from 'react';
import './Login.css'
import { useForm } from "react-hook-form";import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { userContext } from '../../App';
firebase.initializeApp(firebaseConfig);

const Login = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    

    const handleGoogleLogin = () =>{
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const user = result.user;
            console.log(user);
            setLoggedInUser(user);
            console.log(loggedInUser);
          }).catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage)
          });
    }




    return (
        <main className="login-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-1">

                        <form>
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" name="Enter email" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="Password" />
                            </div>
                                <a href="#">Forgot Password</a>
                            {/* <input type="submit" class="btn btn-primary" value="Login" /> */}
                            <button class="btn btn-primary" onClick={handleGoogleLogin}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;