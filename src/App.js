import React from "react";
import "./index.css";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="min-h-[100vh]">
        <SideBar className="h-full"/>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
