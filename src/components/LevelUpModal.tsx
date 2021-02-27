import styles from '../styles/components/LevelUpModal.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { useContext } from 'react'

export function LevelUpModal() {
    const { level, classLevelUpModal } = useContext(ChallengesContext)
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
            <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo nivel</p>

                <button type="button" onClick={classLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar modal" />
                </button>
            </div>
        </div>
    )
}
