import React, { useRef, useState } from "react";
import Header from "./Header";
import Validata from "../utils/Validata";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/UserSlice";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  function handleButtonClick() {
    const message = Validata(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setErrorMessage(message);

    if (message) return;

    if (signUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/116375371?v=4",
          });
        })
        .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
        })

        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  }
  return (
    <div className="absolute">
      <Header />
      <img
        src="https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg"
        alt="img-back"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute right-0 left-0 my-36 p-12 top-[10%]  w-3/12 mx-auto bg-black text-white   bg-opacity-70"
      >
        <div>
          <h1 className="text-center font-medium text-lg">
            {signUp ? "Sign up" : "Sign in"}
          </h1>
          {signUp && (
            <input
              ref={name}
              type="text"
              className="bg-gray-400 w-full py-1 mt-5"
              placeholder="name"
            />
          )}
          <input
            ref={email}
            type="email"
            className="bg-gray-400 w-full py-1 mt-5"
            placeholder="email"
          />
          <input
            ref={password}
            type="password"
            className="bg-gray-400 mt-5 w-full py-1"
            placeholder="password"
          />
          <p className="text-red-600 text-lg text-semibold text-center mt-3">
            {errorMessage}
          </p>
          <button
            type="submit"
            onClick={handleButtonClick}
            className="bg-red-500 w-full mt-4 rounded py-1"
          >
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
