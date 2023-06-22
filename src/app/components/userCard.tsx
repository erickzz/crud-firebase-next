import classes from './userCard.module.css';

type user = { email: string; nome: string; cidade: string; profissao: string };
const UserCard: React.FC<{ user: user }> = ({ user }) => {
  return (
    <tr className={classes.trUser}>
      <td>{user.email}</td>
      <td>{user.nome}</td>
      <td>{user.cidade}</td>
      <td>{user.profissao}</td>
    </tr>
  );
};

export default UserCard;
