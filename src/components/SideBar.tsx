import { useRouter } from 'next/router';
import styles from '../styles/components/SideBar.module.css'

import {BiHomeAlt, BiAward} from 'react-icons/bi'

import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export function SideBar() {
    const router = useRouter();
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme ==='dark' ? `${styles.containerDark} ${styles.container}` : styles.container}>
            <aside>
                    <header>
                        <img src="/icons/logo.svg" alt="move.it logo"/>
                    </header>

                    <main>
                    {router.pathname === '/' ? (
                        <a href="/" className={styles.active}>
                            <BiHomeAlt />
                        </a>
                    ) : (
                        <a href="/" >
                            <BiHomeAlt />
                        </a>
                    )}
                    {router.pathname === '/ranking' ? (
                        <a href="/ranking" className={styles.active}>
                            <BiAward  />
                        </a>
                    ) : (
                        <a href="/ranking">
                            <BiAward  />
                        </a>
                    )}
                    
                    </main>
            </aside>
        </div>
    )
}