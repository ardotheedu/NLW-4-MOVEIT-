import Head from 'next/head'
import { GetServerSideProps } from 'next'


import {ExperienceBar} from '../components/ExperienceBar'
import { Profile } from '../components/profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengeBox } from '../components/ChallengeBox'


import styles from '../styles/pages/Home.module.css'
import { ChallengesProvider } from '../contexts/ChallengesContext'

import { SideBar } from '../components/SideBar'
import { ToggleButton } from '../components/ToggleButton'
import { useContext } from 'react'
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext'


interface HomeProps {
  level: number,
  currentExperience: number,
  challengeCompleted: number
}
export default function Home(props: HomeProps) {
  const {theme} = useContext(ThemeContext)

  
  return (

      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengeCompleted={props.challengeCompleted}
      > 
        <div className={theme === 'dark' ? `${styles.dark}` : styles.page}>
              <SideBar />
              <ToggleButton />
              <div className={styles.container}> 
                <Head>
                  <title>Inicio | move.it</title>
                </Head>
                <ExperienceBar />
                <CountdownProvider>
                  <section>
                    <div>
                      <Profile />
                      <CompletedChallenges />
                      <Countdown />
                    </div>
                    <div>
                      <ChallengeBox />
                    </div>
                  </section>
                </CountdownProvider>
              </div>
        </div>
      
      </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengeCompleted } = ctx.req.cookies


  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted)
    }
  }
}