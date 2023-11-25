/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">UmaIma</span>
        <div className="links">
          
         <a href="https://www.facebook.com/your-facebook-profile" target="_blank" rel="noopener noreferrer"> 
            <i className="fab fa-facebook"></i>
        </a>
            <a href="https://www.linkedin.com/in/umaima-mehmood-b14398259/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/UMAIMA-MEHMOOD" target="_blank" rel="noopener noreferrer"> 
          <i className="fab fa-github"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Umaima Mehmood
        </p>
      </div>
    </footer>
  );
}

export default Footer;
