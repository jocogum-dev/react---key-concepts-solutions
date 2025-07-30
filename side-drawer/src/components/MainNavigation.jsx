import SideDrawer from './SideDrawer.jsx';
import classes from './MainNavigation.module.css';
import { createPortal } from 'react-dom';
import { useState } from 'react';

function MainNavigation() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  function handleOpenDrawer() {
    setSideDrawerOpen(prevState => !prevState);
  }

  return (
    <>
      <header className={classes.header}>
        <h1>Demo App</h1>
        <button className={classes.btn} onClick={handleOpenDrawer}>
          <div />
          <div />
          <div />
        </button>
      </header>
      {sideDrawerOpen && <SideDrawer handleOpenDrawer={handleOpenDrawer} />}
      {/* Should be shown conditionally: <SideDrawer />  */}
    </>
  );
}

export default MainNavigation;