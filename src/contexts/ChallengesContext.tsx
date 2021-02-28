import { createContext, useState, ReactNode, useEffect } from 'react'
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'
import { LevelUpModal } from '../components/LevelUpModal'

export const ChallengesContext = createContext({} as ChallengesContextData)

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number
}
interface ChallengesContextData {
    level: number,
    currentExperience: number,
    challengeCompleted: number,
    experienceToNextLevel: number,
    activeChallenge: Challenge,
    levelUp: () => void,
    startNewChallenge: () => void,
    resetChallenge: () => void,
    completeChallenge: () => void,
    classLevelUpModal: () => void,
}
interface ChallengesProviderProps {
    children: ReactNode;
    level: number,
    currentExperience: number,
    challengeCompleted: number
}



export function ChallengesProvider({children, ...rest}: ChallengesProviderProps) {
    const [level, setLevel] = useState(rest.level)
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience)
    const [challengeCompleted, setChallengeCompleted] = useState(rest.challengeCompleted)
    const [isLevelUpModalOpen, setIsLevelUpdateModalOpen] = useState(false)

    const [activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    useEffect(() => {
        Cookies.set('level', String(level))
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengeCompleted', String(challengeCompleted))
    }, [level, currentExperience, challengeCompleted])

    function levelUp() {
        setLevel(level + 1)
        setIsLevelUpdateModalOpen(true)
    }

    function classLevelUpModal() {
        setIsLevelUpdateModalOpen(false)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallengeIndex]

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()
        if (Notification.permission === 'granted') {
            new Notification('Novo desafio', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge() {
        setActiveChallenge(null)
    }
     
    function completeChallenge() {
        if (!activeChallenge) {
            return;
        }

        const {amount} = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengeCompleted(challengeCompleted + 1)
    }
    return (
        <ChallengesContext.Provider 
            value={{
                level,
                currentExperience,
                challengeCompleted,
                levelUp,
                experienceToNextLevel,
                startNewChallenge,
                activeChallenge,
                resetChallenge,
                completeChallenge,
                classLevelUpModal
            }}
        >
            {children}
            {isLevelUpModalOpen && <LevelUpModal />}
        </ChallengesContext.Provider>
    )
}

