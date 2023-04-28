import React, { useRef, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  const logIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value,
    ).then((authUser) => {
      console.log(authUser)
    }).catch((error) => alert(error.message));
  }

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login_container">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix logo"
        />

        <button onClick={() => navigate("/signup")} className="login_button">
          Sign Up
        </button>
      </div>
      <div className="login_body">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className="login_form">
          <form>
          <input
            ref={emailRef}
            className="email_input"
            type="email"
            name="email"
            placeholder="Email address"
          />
          {!show && (
            <button onClick={() => setShow(true)} className="email_button">
              GET STARTED
            </button>
          )}
          {show && (
            
            <><input className="email_password" ref={passwordRef} type="password" placeholder="Enter Password" name="pwd"/>
            <button  className="email_button" onClick={logIn}>
            Log In
          </button>
            </>
              
              )}
         
            

</form>
        </div>
      </div>
    </div>
  );
};

export default Login;
