'use client';

import { useEffect, useState } from 'react';
import getData from '@/app/firebase/db/getData';
import { DocumentData } from 'firebase/firestore';

type user = {
  cidade: string;
  email: string;
  nome: string;
  profissao: string;
};

const Users = () => {
  const [usersData, setUsersData] = useState<DocumentData>();

  useEffect(() => {
    const retrieveUsers = async () => {
      const data = await getData('users');
      setUsersData(data.result!);
      console.log(usersData);
    };
    retrieveUsers();
  }, []);

  const renderUsers = usersData?.map((user: user) => (
    <div key={user.email}>
      <p>{user.nome}</p>
      <p>{user.email}</p>
    </div>
  ));
  return <div>{renderUsers}</div>;
};

export default Users;
