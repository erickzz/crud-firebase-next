'use client';

import { useEffect, useState, useContext } from 'react';
import getData from '@/app/firebase/db/getData';
import { DocumentData } from 'firebase/firestore';
import AuthContext from '@/app/context/auth-context';
import { useRouter } from 'next/navigation';

type user = {
  cidade: string;
  email: string;
  nome: string;
  profissao: string;
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

  const renderUsers = usersData?.map((user: user) => (
    <div key={user.email}>
      <p>{user.nome}</p>
      <p>{user.email}</p>
    </div>
  ));
  return <div>{renderUsers}</div>;
};

export default Users;
