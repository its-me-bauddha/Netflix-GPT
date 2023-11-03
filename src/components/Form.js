import React from "react";

const Form = () => {
  return (
    <div>
      <form
        className="absolute flex flex-col right-0 left-[400px] mt-[200px] w-80
        m-40 p-5 text-white bg-black rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl p-2">Sign In</h1>
        <input
          className="p-3 m-2 rounded-sm bg-richblack-800 w-[95%] "
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-3 m-2 rounded-sm bg-richblack-800 w-[95%] "
          type="password"
          placeholder="Password"
        />
        <button className="m-3 p-3 bg-red-5 w-[95%]">Sign In</button>
      </form>
    </div>
  );
};

export default Form;
