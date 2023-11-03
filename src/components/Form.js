import React, { useRef, useState } from "react";
import { checkValidData, checkValidateName } from "../utils/validate";

const Form = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const firstName = useRef(null);
  const lastName = useRef(null);
  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (!isSignInForm) {
      const message = checkValidateName(
        firstName.current.value,
        lastName.current.value
      );
      setErrorMessage(message);
    }
  };
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute flex flex-col right-0 left-[400px] mt-[150px] w-96
        m-40 p-5 text-white bg-black rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl p-2 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <div className=" flex ">
            <input
              ref={firstName}
              className="p-3 m-2 rounded-lg bg-richblack-800 w-[95%] "
              type="text"
              placeholder="First Name"
            />
            <input
              ref={lastName}
              className="p-3 m-2 rounded-lg bg-richblack-800 w-[95%] "
              type="text"
              placeholder="Last Name"
            />
          </div>
        )}
        <input
          ref={email}
          className="p-3 m-2 rounded-lg bg-richblack-800 w-[95%] "
          type="text"
          placeholder="Email Address"
        />

        <input
          ref={password}
          className="p-3 m-2 rounded-lg bg-richblack-800 w-[95%] "
          type="password"
          placeholder="Password"
        />
        <p className="text-red-5 m-3 font-semibold text-lg">{errorMessage}</p>
        <button
          className="m-3 p-3 bg-red-5 w-[95%] rounded-md"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="m-3  text-pure-greys-100">
          {isSignInForm ? "New to Netflix ? " : "Already Registered ? "}{" "}
          <span
            className=" font-semibold cursor-pointer text-white"
            onClick={toggleSignInForm}
          >
            {" "}
            {isSignInForm ? "Sign Up" : "Sign In"}
          </span>{" "}
          Now
        </p>
      </form>
    </div>
  );
};

export default Form;
