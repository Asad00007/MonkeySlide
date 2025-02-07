import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import MonkeyState from "./context/MonkeyState.jsx";
import Chatbox from "./components/Chatbox/Chatbox.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
  return (
    <>
      <MonkeyState>
        <Navbar />
        <Layout />
      </MonkeyState>
    </>
  );
}

export default App;
