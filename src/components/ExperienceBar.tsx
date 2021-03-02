import styles from '../styles/components/ExperienceBar.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { useContext } from 'react'
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext';
export function ExperienceBar() {
    const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext)
    const { theme } = useContext(ThemeContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel
    return (
        <header className={theme==='dark' ? `${styles.experienceBar} ${styles.experienceBarDark}`: styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: `${percentToNextLevel}%`}} />
                <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%` }}>{currentExperience} px</span>
            </div>
            <span>{experienceToNextLevel} px</span>
        </header>
    ) 
}