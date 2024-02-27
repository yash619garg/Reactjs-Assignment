import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";

const LoginButton = styled(Button)`
  margin-top: 40px;
  color: white;
  background-color: #1b88f4;
  text-transform: none;
`;
const SignInButton = styled(Button)`
  margin-top: 20px;
  color: #1b88f4;
  //   background-color: #b8bdbd;
  //   color: white;
`;

const signUpInitial = {
  name: "",
  email: "",
  password: "",
};
const loginInitial = {
  email: "",
  password: "",
};

const Login = () => {
  const [Account, ToggleAccount] = useState("login");
  const [signUp, setSignUp] = useState(signUpInitial);
  const [login, setLogin] = useState(loginInitial);
  const [error, setError] = useState("");
  const ToggleMyAccount = () => {
    Account === "login" ? ToggleAccount("signUp") : ToggleAccount("login");
  };

  const changeInput = (e) => {
    setSignUp({ ...signUp, [e.target.name]: e.target.value });
  };

  const changeLoginValue = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const signUpAccount = () => {
    console.log(signUp);
  };

  const loginAccount = () => {
    console.log(login);
  };
  return (
    <div className="main-container">
      <div className="login-box">
        <div className="login-box-heading">Welcome</div>
        {Account === "login" ? (
          <Box className="small-box">
            <TextField
              className="textfield"
              style={{ marginTop: "20px" }}
              variant="standard"
              label="Email"
              name="email"
              onChange={(e) => {
                changeLoginValue(e);
              }}
            />
            <TextField
              variant="standard"
              type="password"
              style={{ marginTop: "20px" }}
              label="Password"
              name="password"
              onChange={(e) => {
                changeLoginValue(e);
              }}
            />
            <LoginButton
              sx={{
                ":hover": {
                  bgcolor: "#0f65ba",
                  color: "white",
                },
              }}
              variant="contained"
              onClick={loginAccount}
            >
              {" "}
              Login{" "}
            </LoginButton>
            <Typography
              style={{
                color: " #0f65ba",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              OR
            </Typography>
            <SignInButton
              variant="text"
              onClick={() => {
                ToggleMyAccount();
              }}
            >
              Create an account ? SignUp
            </SignInButton>
          </Box>
        ) : (
          <Box className="small-box">
            <TextField
              className="textfield"
              style={{ marginTop: "20px" }}
              variant="standard"
              label="Name"
              name="name"
              onChange={(e) => {
                changeInput(e);
              }}
            />
            <TextField
              className="textfield"
              style={{ marginTop: "20px" }}
              variant="standard"
              label="Email"
              name="email"
              onChange={(e) => {
                changeInput(e);
              }}
            />
            <TextField
              variant="standard"
              type="password"
              style={{ marginTop: "20px" }}
              label="Password"
              name="password"
              onChange={(e) => {
                changeInput(e);
              }}
            />
            <LoginButton
              sx={{
                ":hover": {
                  bgcolor: "#4b8381",
                  color: "white",
                },
              }}
              variant="contained"
              onClick={() => {
                signUpAccount();
              }}
            >
              {" "}
              SignUp{" "}
            </LoginButton>
            {error && <Typography>{error}</Typography>}
            <Typography
              style={{
                color: " #0f65ba",
                textAlign: "center",
                marginTop: "30px",
              }}
            >
              OR
            </Typography>
            <SignInButton
              variant="text"
              onClick={() => {
                ToggleMyAccount();
              }}
            >
              Already have an account ? Login
            </SignInButton>
          </Box>
        )}
      </div>
    </div>
  );
};

export default Login;
