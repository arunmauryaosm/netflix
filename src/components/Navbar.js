import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  
  const navigate = useNavigate()

  const transition = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transition);
    return () => window.removeEventListener("scroll", transition);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_container">
        <div className="nav_logo" onClick={() => navigate('/')}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="Netflix logo"
          />
        </div>
        <div className="nav_profile" onClick={() => navigate('./profile')}>
          <CgProfile color="red" size={40} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
