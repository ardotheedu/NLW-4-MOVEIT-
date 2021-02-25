import styles from '../styles/components/CompletedChallenges.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { useContext } from 'react'
export function CompletedChallenges() {
    const {challengeCompleted} = useContext(ChallengesContext)
    return (
        <div className={styles.completedChanllengesContainer}>
            <span>Desafios completos</span>
            <span>{challengeCompleted}</span>
        </div>
    )
}