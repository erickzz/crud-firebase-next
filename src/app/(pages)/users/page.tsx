'use client';

import { useEffect, useState, useContext } from 'react';
import getData from '@/app/firebase/db/getData';
import { DocumentData } from 'firebase/firestore';
import AuthContext from '@/app/context/auth-context';
import { BeatLoader } from 'react-spinners';
import UserCard from '../../components/UserCard';
import classes from './users.module.css';
import { redirect } from 'next/navigation';

type userType = {
  nome: string;
  email: string;
  cidade: string;
  profissao: string;
  id: string;
};

const Users = () => {
  const [usersData, setUsersData] = useState<DocumentData>();
  const [loading, setLoading] = useState<boolean>(true);

  const ctx = useContext(AuthContext);

  useEffect(() => {
    /* if (!ctx.isLogged) {
      router.push('/login');
    } */

    if (!ctx.isLogged) {
      redirect('/login');
    } else {
      const retrieveUsers = async () => {
        const data = await getData('users');
        setUsersData(data.result!);
        setLoading(false);
      };
      retrieveUsers();
    }

    /* if (!firstRender) {
      setLoading(true);
      console.log(ctx.isLogged);
      if (ctx.isLogged) {
        const retrieveUsers = async () => {
          const data = await getData('users');
          setUsersData(data.result!);
          setLoading(false);
        };
        retrieveUsers();
      }
      if (!ctx.isLogged) {
        console.log('POAPDKASM');
        router.push('/login');
      }
    } else {
      setFirstRender(false);
    } */
  }, [ctx.isLogged]);

  const renderUsers = usersData?.map((user: userType) => {
    return <UserCard key={user.id} user={user} />;
  });
  return (
    <div className={classes.tableContainer}>
      {loading ? (
        <BeatLoader color={'#012269'} loading={loading} size={60} />
      ) : (
        <table className={classes.tableUser}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Nome</th>
              <th>Cidade</th>
              <th>Profissão</th>
            </tr>
          </thead>
          <tbody>{renderUsers}</tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
