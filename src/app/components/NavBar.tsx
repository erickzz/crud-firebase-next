import classes from './navBar.module.css';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <ul className={classes.ulNav}>
        <li>
          <Link href="/">Logo</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
