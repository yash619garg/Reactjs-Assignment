import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signUp">
      <div className="signUp-heading">
        Sign up and get exclusive
        <br />
        special deals
      </div>
      <div className="signUp-input">
        <input className="sign-input" type="text" />
        <button>
          <Link to="/signUp">SignUp</Link>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
