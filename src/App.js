import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from "./Homepage";
import Login from "./Login";
import firebase from "./firebase";

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
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
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
