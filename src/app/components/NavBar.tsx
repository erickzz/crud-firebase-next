import classes from './navBar.module.css';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/auth-context';
import logout from '../firebase/auth/logout';

const NavBar = () => {
  const ctx = useContext(AuthContext);

  const [firstRender, setFirstRender] = useState<boolean>(true);
  const [isLogged, setIsLogged] = useState<boolean>(ctx.isLogged);

  useEffect(() => {
    setIsLogged(ctx.isLogged);
  }, [ctx.isLogged]);
  return (
    <div className={classes.navbar}>
      <ul className={classes.ulNav}>
        <li>
          {isLogged ? (
            <a className={classes.logo}> Logo </a>
          ) : (
            <Link href="/">Logo</Link>
          )}
        </li>
        <li>
          {isLogged ? (
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
