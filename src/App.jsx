import "./App.css";

import Navbar from "./components/Navbar/Navbar";

import MonkeyState from "./context/MonkeyState.jsx";

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
