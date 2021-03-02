import styles from '../styles/components/CompletedChallenges.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
export function CompletedChallenges() {
    const {challengeCompleted} = useContext(ChallengesContext)
    const { theme } = useContext(ThemeContext);
    return (
        <div className={theme==='dark' ? 
        `${styles.completedChanllengesContainer} ${styles.completedChallengesContainerDark}`
        : styles.completedChanllengesContainer}>
            <span>Desafios completos</span>
            <span>{challengeCompleted}</span>
        </div>
    )
}