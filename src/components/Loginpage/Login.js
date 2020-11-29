import React, { useContext } from 'react';
import './Login.css'
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebaseConfig';
import { userContext } from '../../App';
import Navbar from '../Common/Navbar/Navbar';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
// firebase.initializeApp(firebaseConfig);

const Login = () => {
    
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    

    const handleGoogleLogin = () =>{
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider).then(function(result) {
            const user = result.user;
            setLoggedInUser(user);
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
<Navbar />
                        <form>
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" name="Enter email" />
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name="Password" />
                            </div>
                                <p>Forgot Password</p>
                            {/* <input type="submit" class="btn btn-primary" value="Login" /> */}
                            <button class="btn btn-primary">Login</button>
                        </form>
                        <button onClick={handleGoogleLogin}>Login With Google</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;