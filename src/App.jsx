import { useState } from "react";
import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import NotesPage from "./pages/NotesPage";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const loginStateToggling = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      {/* <Login /> */}
      {/* <Sidebar /> */}
      {isLoggedIn ? <NotesPage onClick={loginStateToggling} /> : <Login />}
      {/* <NotesPage /> */}
    </>
  );
}

export default App;
