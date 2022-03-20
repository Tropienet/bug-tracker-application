import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./Homepage";
import Login from "./Login";
import firebase from "./firebase";
import RouteSwitch from "./RouteSwitch";

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
    if(user) {
      return setLoggedIn(true);
    }
    setLoggedIn(false);
  })

  if( loggedIn === true ){
    return (
      <RouteSwitch />
    )
  }else{
    return (
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
  }
}

export default App;
