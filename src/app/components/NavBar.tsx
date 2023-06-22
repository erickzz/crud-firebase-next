import classes from './navBar.module.css';
import Link from 'next/link';
import { useContext } from 'react';
import AuthContext from '../context/auth-context';
import logout from '../firebase/auth/logout';

const NavBar = () => {
  const ctx = useContext(AuthContext);

  return (
    <div className={classes.navbar}>
      <ul className={classes.ulNav}>
        <li>
          <Link href="/">Logo</Link>
        </li>
        <li>
          {ctx.isLogged ? (
            <Link href="/login" onClick={logout}>
              Deslogar
            </Link>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
