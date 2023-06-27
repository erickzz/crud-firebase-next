'use client';

import { useEffect, useState, useContext } from 'react';
import getData from '@/app/firebase/db/getData';
import { DocumentData } from 'firebase/firestore';
import AuthContext from '@/app/context/auth-context';
import { useRouter } from 'next/navigation';
import { BeatLoader } from 'react-spinners';
import UserCard from '../../components/UserCard';
import classes from './users.module.css';

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
  const [firstRender, setFirstRender] = useState<boolean>(true);

  const ctx = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    /* if (!ctx.isLogged) {
      router.push('/login');
    } */

    if (!firstRender) {
      setLoading(true);
      console.log(ctx.isLogged);
      if (ctx.isLogged) {
        const retrieveUsers = async () => {
          const data = await getData('users');
          setUsersData(data.result!);
        };
        retrieveUsers();
      }
      if (!ctx.isLogged) {
        console.log('POAPDKASM');
        router.push('/login');
      }
    } else {
      setFirstRender(false);
    }
    setLoading(false);
  }, [ctx.isLogged, firstRender]);

  const renderLoading = (
    <BeatLoader color={'#012269'} loading={loading} size={60} />
  );

  const renderUsers = usersData?.map((user: userType) => {
    return <UserCard key={user.id} user={user} />;
  });
  return (
    <div className={classes.tableContainer}>
      {loading ? (
        renderLoading
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
