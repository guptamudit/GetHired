import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import { auth } from "./Firebase/Firebase";
import { useEffect, useState } from "react";

function App() {
  const [loggedin, setLoggedin] = useState("hidden");
  const [loggedout, setLoggedout] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        setLoggedin("hidden");
        setLoggedout("block");
      } else {
        setLoggedin("block");
        setLoggedout("hidden");
      }
    });
  }, []);
  return (
    <>
      <Navbar loginhai={loggedin} loginnahihai={loggedout} />
      <Outlet />
    </>
  );
}

export default App;
