import styles from '../styles/components/ChallengeBox.module.css'
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import { ThemeContext } from '../contexts/ThemeContext';

export function ChallengeBox() {
    const {resetChallenge, activeChallenge, completeChallenge} = useContext(ChallengesContext)
    const {resetCountdown} = useContext(CountdownContext)
    const {theme} = useContext(ThemeContext)

    function handleChallengeSuccessed() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountdown( )
    }

    return (
        <div className={theme == 'dark' ? `${styles.challengeBoxContainer} ${styles.challengeBoxContainerDark}` : styles.challengeBoxContainer}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSuccessedButton}
                            onClick={handleChallengeSuccessed}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                        Avance de level completando os desafios
                    </p>
                </div>
            )}
        </div>
    )
}