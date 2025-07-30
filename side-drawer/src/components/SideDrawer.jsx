import { createPortal } from 'react-dom';
import classes from './SideDrawer.module.css';

function SideDrawer({handleOpenDrawer}) {
  return createPortal(
    <>
      <div onClick={handleOpenDrawer} className={classes.backdrop} />
      <aside className={classes.drawer}>
        <nav>
          <ul>
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li>
              <a href="/products">All Products</a>
            </li>
            <li>
              <a href="/profile">Your Profile</a>
            </li>
          </ul>
        </nav>
      </aside>
    </>,
    document.getElementById('drawer')
  );
}

export default SideDrawer;