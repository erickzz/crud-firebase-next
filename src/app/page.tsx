'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import classes from './page.module.css';

const Home = () => {
  const router = useRouter();

  return (
    <div className={classes.container}>
      <h2>Home Page</h2>
    </div>
  );
};

export default Home;
