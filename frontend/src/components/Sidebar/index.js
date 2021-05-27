import React from "react";
import { useSelector } from "react-redux";
import SideBarLand from "../SideBarComponents/SideBarLand";
import './Sidebar.css'

function SideBar() {
  const sessionUser = useSelector((state) => state.session.user);
  let sideBarContent;

  if (sessionUser) {
    sideBarContent = (
      <>
        <SideBarLand lands={[]} />
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
    <div className='sidebar'>
      { sideBarContent }
    </div>
    );
}

export default SideBar;
