'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import cadastrar from '@/app/firebase/auth/cadastrar';
import classes from './cadastro.module.css';

const Cadastro = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [nome, setNome] = useState<string>('');
  const [profissao, setProfissao] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    cadastrar(email, senha, nome, profissao, cidade);
    console.log(email, senha);
    router.push('/users');
  };

  const navegarParaLogin = () => {
    router.push('/login');
  };

  return (
    <div className={classes.container}>
      <div className={classes.containerCadastro}>
        <form onSubmit={formSubmitHandler} className={classes.formCadastro}>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSenha(e.target.value)
            }
          />
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setNome(e.target.value)
            }
          />
          <label htmlFor="profissao">Profissão</label>
          <input
            id="profissao"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setProfissao(e.target.value)
            }
          />
          <label htmlFor="cidade">Cidade</label>
          <input
            id="cidade"
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCidade(e.target.value)
            }
          />
          <button className={classes.button} type="submit">
            Cadastrar
          </button>
        </form>

        <button
          className={`${classes.button} ${classes.buttonVoltar}`}
          onClick={navegarParaLogin}
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default Cadastro;
