import React, { useEffect } from "react";
import Header from "./Header";
import "./App.css";
import "./Sidebar";
import Sidebar from "./Sidebar";
import "./Feed.js";
import Feed from "./Feed";

import Widgets from "./Widgets.js";

import { login, logout, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./Login";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />

          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
