import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  let navigate = useNavigate();
  
  return (
    <div>
      Welcome to Chat App!
      <Button
        onClick={() => {
          navigate("/login");
        }}
      >
        Log in
      </Button>
      <Button onClick={() => {
          navigate("/signup");
        }}> Sign up</Button>
    </div>
  );
};

export default MainPage;
