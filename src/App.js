import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/counter/userSlice";
import Proflie from "./components/Proflie";
function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          uid : userAuth.uid,
          email : userAuth.email,
        }));
      } else{
        //logged out
        dispatch(logout(
        ))
      }
    });

    return unsubscribe;
  }, [dispatch]); 
 
  return (
    <div className="app">
      
      <BrowserRouter>
      <Routes>
        {!user ? (

        <><Route  path="/" element={<Login/>} />
        <Route exact path="/signup" element={<Signup />} /></>
        ) : (
          
          <><Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/profile" element={<Proflie/>}/>
          
          </>
        )} 
 
      
        </Routes>
      

      </BrowserRouter>

    </div>
  );
}

export default App;
