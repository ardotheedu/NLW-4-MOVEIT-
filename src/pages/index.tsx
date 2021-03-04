import Router from 'next/router';
import styles from '../styles/pages/Home.module.css';
import axios from 'axios';

import { FaGithub } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useEffect, useState } from 'react';

export default function Home() {
  const [userName, setUserName] = useState('');

  async function handleNavigateToLogged() {
    const { name, avatar_url } = (await axios.get(`https://api.github.com/users/${userName}`)).data;

    if(name && avatar_url) {
      Router.push('/dashboard');
      sessionStorage.setItem('name', name);
      sessionStorage.setItem('avatar_url', avatar_url);
      
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <img src="icons/Simbolo.svg" width="50%" className={styles.imageBackgroung}/>
      </div>
      <section>
        <img src="logo-white.svg" />
        <div className={styles.loginBox}>
          <h3>Bem-vindo</h3>
          <p className={styles.hintIcon}>
            <FaGithub size={40} color="#ddd"/>
            Faça login com seu GitHub <br /> para começar
          </p>
          
          <div className={styles.continue}>
            <input 
              required
              placeholder="Digite seu username"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
            {userName ? (
              <button
                type="button"
                onClick={handleNavigateToLogged}
                className={styles.filled}
              >
                <AiOutlineArrowRight size={25} color="#fff" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNavigateToLogged}
              >
                <AiOutlineArrowRight size={25} color="#fff" />
              </button>
            )}

          </div>
        </div>
      </section>
      
    </div>
  );
}