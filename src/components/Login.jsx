import React, { useState } from "react";
import Header from "./Header";

function Login() {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="absolute">
      <Header />
      <img
        src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
        alt="img-back"
      />
      <form className="absolute right-0 left-0 my-36 p-12 top-[10%]  w-3/12 mx-auto bg-black text-white   bg-opacity-70">
        <div>
          <h1 className="text-center font-medium text-lg">
            {signUp ? "Sign up" : "Sign in"}
          </h1>
          {signUp && (
            <input
              type="text"
              className="bg-gray-400 w-full py-1 mt-5"
              placeholder="name"
            />
          )}
          <input
            type="email"
            className="bg-gray-400 w-full py-1 mt-5"
            placeholder="email"
          />
          <input
            type="password"
            className="bg-gray-400 mt-5 w-full py-1"
            placeholder="password"
          />
          <button className="bg-red-500 w-full mt-4 rounded py-1">
            {signUp ? "Sign up" : "Sign in"}
          </button>
        </div>
        <p className="mt-3">
          {signUp ? "Already have account?" : "New to Netflix?"}
          <span
            className="text-red-500 ml-1 cursor-pointer"
            onClick={() => setSignUp((prev) => !prev)}
          >
            {!signUp ? "Sign up" : "Sign in"}
          </span>{" "}
          Now
        </p>
      </form>
    </div>
  );
}

export default Login;
