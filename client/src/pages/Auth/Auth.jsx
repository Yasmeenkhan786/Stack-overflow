import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import icon from "../../assets/icon.png";
import Aboutauth from "./Aboutauth";
import { signup, login } from "../../actions/auth";

const Auth = () => {
  const [isSignUp, setisSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setisSignUp(!isSignUp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password");
    }
    if (isSignUp) {
      if (!name) {
        alert("Enter a name to continue");
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };
  return (
    <div>
      <section className="auth-section">
        {isSignUp && <Aboutauth />}
        <div className="auth-container-2">
          {!isSignUp && <img src={icon} alt="stackoverflow" className="login-logo" />}
          <form onSubmit={handleSubmit}>
            {isSignUp && (
              <label htmlFor="name">
                <h4>Display name</h4>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>
            )}
            <label htmlFor="email">
              <h4>Email</h4>
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label htmlFor="password">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>Password</h4>
                {!isSignUp && (
                  <h4 style={{ color: "#007ac6", fontSize: "13px" }}> forgot password?</h4>
                )}
              </div>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {isSignUp && (
                <p style={{ color: "#666767", fontSize: "13px" }}>
                  Password must contain at least eight <br /> characters including at least 1 letter
                  and 1 <br /> number
                </p>
              )}
            </label>
            {isSignUp && (
              <label htmlFor="check">
                <input type="checkbox" id="check" />
                <p style={{ fontSize: "13px" }}>
                  Opt-in to receive occasional, <br />
                  product updates, user reserach invitation <br />
                  company announcement, and digests.
                </p>
              </label>
            )}
            <button type="submit" className="auth-btn">
              {isSignUp ? "Sign up" : "Log In"}
            </button>
            {isSignUp && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                BY clicking "Sign-up", you agree to our
                <span style={{ color: "#007ac6" }}>
                  {" "}
                  terms of <br />
                  services
                </span>
                ,<span style={{ color: "#007ac6" }}> privacy policy</span> and
                <span style={{ color: "#007ac6" }}> privacy policy</span>
              </p>
            )}
          </form>
          <p>
            {isSignUp ? "Already have an account" : "Don't have an account"}
            <button type="button" className="handle-switch-btn" onClick={handleSwitch}>
              {isSignUp ? "Log In" : "Sign up"}
            </button>
          </p>
        </div>
      </section>
    </div>
  );
};
export default Auth;
