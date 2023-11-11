import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

function Sidebar(props) {
  return (
    <div>
      <Menu className="menu">
        <a className="menu-item" href="/dashboard">
          Home
        </a>
        <a className="menu-item" href="/">
          Settings
        </a>
        <a className="menu-item" href="https://github.com/yunapahk/playpal-frontend">
          Github
        </a>
        <a className="menu-item" href="/">
          Logout
        </a>
      </Menu>
    </div>
  );
}
export default Sidebar;
