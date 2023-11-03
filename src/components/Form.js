import React, { useState } from "react";

const Form = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <form
        className="absolute flex flex-col right-0 left-[400px] mt-[200px] w-80
        m-40 p-5 text-white bg-black rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl p-2 text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <div className=" flex ">
            <input
              className="p-3 m-2 rounded-lg bg-richblack-800 w-[95%] "
              type="text"
              placeholder="First Name"
            />
            <input
              className="p-3 m-2 rounded-lg bg-richblack-800 w-[95%] "
              type="text"
              placeholder="Last Name"
            />
          </div>
        )}
        <input
          className="p-3 m-2 rounded-lg bg-richblack-800 w-[95%] "
          type="text"
          placeholder="Email Address"
        />

        <input
          className="p-3 m-2 rounded-lg bg-richblack-800 w-[95%] "
          type="password"
          placeholder="Password"
        />
        <button className="m-3 p-3 bg-red-5 w-[95%] rounded-md">
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
