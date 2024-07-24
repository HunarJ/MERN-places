import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

import { MainHeader } from "./MainHeader";
import { NavLinks } from "./NavLinks";
import { SideDrawer } from "./SideDrawer";

import "./MainNavigation.css";
import { Backdrop } from "../UIElements/Backdrop";

export const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  function handleOpenDrawer() {
    setDrawerIsOpen(true);
  }

  function handleCloseDrawer() {
    setDrawerIsOpen(false);
  }
  return (
    <>
      {drawerIsOpen && <Backdrop onClick={handleCloseDrawer} />}

      <SideDrawer show={drawerIsOpen} onClick={handleCloseDrawer}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={handleOpenDrawer}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
};
