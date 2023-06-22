'use client';

import { useEffect, useState, useContext } from 'react';
import getData from '@/app/firebase/db/getData';
import { DocumentData } from 'firebase/firestore';
import AuthContext from '@/app/context/auth-context';
import { useRouter } from 'next/navigation';
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

  const ctx = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if (!ctx.isLogged) {
      router.push('/login');
    }
    const retrieveUsers = async () => {
      const data = await getData('users');
      setUsersData(data.result!);
    };
    retrieveUsers();
  }, [ctx.isLogged]);

  const renderUsers = usersData?.map((user: userType) => {
    return <UserCard key={user.id} user={user} />;
  });
  return (
    <div className={classes.tableContainer}>
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
    </div>
  );
};

export default Users;
