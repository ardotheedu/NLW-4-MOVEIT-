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


interface HomeProps {
  level: number,
  currentExperience: number,
  challengeCompleted: number
}
export default function Home(props: HomeProps) {
  
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengeCompleted={props.challengeCompleted}
    > 
      <div className={styles.page}>
            <SideBar />
            
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