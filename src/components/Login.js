import React from "react";
import Header from "./Header";
import Form from "./Form";
import { BG_IMAGE_URL } from "../utils/constants";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen md:w-screen object-cover"
          src={BG_IMAGE_URL}
          alt="netflix-bg"
        />
      </div>
      <Form />
    </div>
  );
};

export default Login;
