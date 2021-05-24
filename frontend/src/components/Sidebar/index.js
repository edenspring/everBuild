import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SideBarLand from "../SideBarComponents/SideBarLand";

function SideBar() {
  const sessionUser = useSelector((state) => state.session.user);

  let sideBarContent;
  if (sessionUser) {
    sideBarContent = (
      <>
        <SideBarLand />
      </>
    );
  } else {
    sideBarContent = (
      <>
        <h2>Log in to view content</h2>
      </>
    );
  }
  return (
    <div>
      <h2>Sidebar</h2>
      { sideBarContent }
    </div>
    );
}

export default SideBar;
