import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { Menu } from "lucide-react";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import "./MainNavigation.css";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <div className="main-navigation-container">
          <button
            className="main-navigation__menu-btn"
            onClick={openDrawerHandler}
          >
            <Menu size={30} />
          </button>

          <h1 className="main-navigation__title">
            <Link to="/">
              <div className="main-navigation__logo-container">BlogNest</div>
            </Link>
          </h1>
        </div>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
