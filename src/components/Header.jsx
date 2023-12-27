import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/UserSlice";
import { Logo } from "../utils/Constans";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user);

  function handleSignOut() {
    signOut(auth).then(() => {
      navigate("/");
    });
  }
  useEffect(() => {
    const unsubscribr = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribr();
  }, []);
  return (
    <div className="  flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black">
      <img className="w-44 h-16 bg-cover bg-no-repeat" src={Logo} alt="logo" />
      {user && (
        <div className="flex">
          <img src={user?.photoURL} alt="" className="h-8" />
          <p onClick={handleSignOut} className="text-white text-lg ">
            LogOut
          </p>
        </div>
      )}
    </div>
  );
}

export default Header;
