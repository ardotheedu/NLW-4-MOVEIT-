import styles from '../styles/components/Countdown.module.css'
import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext';
import { ThemeContext } from '../contexts/ThemeContext';

export function Countdown() {
    const { 
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown 
    } = useContext(CountdownContext)

    const { theme } = useContext(ThemeContext);


    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')


    return (
        <div>
            <div className={theme ==='dark' ? `${styles.countdownContainer} ${styles.countDownContainerDark}` : styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {hasFinished ? (
                <button disabled className={theme==='dark' ? `${styles.countDownButtonDark} ${styles.countdownButton}`: styles.countdownButton}>Ciclo encerrado</button>
            ) : (
                <>
                {isActive ? (
                    <button type="button" className={theme ==='dark' ? 
                    `${styles.countdownButton} ${styles.countDownButtonActiveDark}` : `${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>Abandonar ciclo</button>
                ) : (
                    <button type="button" className={styles.countdownButton} onClick={startCountdown}>Iniciar contagem</button>
                )}
                </>
            )}
            
        </div>

    )
}