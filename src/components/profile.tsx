import styles from '../styles/components/Profile.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
export function Profile() {
    const { level } = useContext(ChallengesContext)
    const { theme } = useContext(ThemeContext);
    const [name, setName] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');

    useEffect(() => { 
        setName(sessionStorage.getItem('name'))
        setAvatarUrl(sessionStorage.getItem('avatar_url'))
    }, []);
    
    return (
        <div className={theme==='dark' ? `${styles.profileContainer} ${styles.profileContainerDark}`: styles.profileContainer }>
            <img src={avatarUrl} alt="Eduardo de Sá" />
            <div>
                <strong>{name}</strong>
                <p>
                    <img src="icons/level.svg" alt="" /> 
                    Level {level}
                </p>
            </div>
        </div>
    )
}