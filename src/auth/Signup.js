import React, { useRef } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Signup = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
        navigate('/')
    }).catch((error) => {
      alert(error.message)
    });
  };



  const navigate = useNavigate(false);


  return (
    <div className="signup">
        <div className="signup_logos">

        <img
          className="signup_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix logo"
          />
          </div>
        <div>
        <div className="signup_form">
          

          <h1>Sign Up</h1>
          <div className="form">
          <form>
          <input ref={emailRef} type="email" placeholder="Enter email address" name="email"/>
          <input ref={passwordRef} type="password" placeholder="Enter Password" name="password" />
          <button onClick={register}  >Sign Up</button>
          </form>
          
        <h4>Alreday have an account? <span onClick={() => navigate('/')}> Log in now. </span> </h4>
                     
        </div>
          
        </div>
        </div>
    </div>

     
  );
};

export default Signup;
