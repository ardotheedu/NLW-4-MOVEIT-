import styles from '../styles/pages/Ranking.module.css'

import { SideBar } from '../components/SideBar'
import { ToggleButton } from '../components/ToggleButton'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export default function Ranking() {
  const {theme} = useContext(ThemeContext)

  return (
        <div className={theme === 'dark' ? `${styles.dark}` : styles.page}>
              <SideBar />

              <div className={styles.container}> 
                <section>
                    <h1>Sem ranking por enquanto</h1>
                    <p>Tente novamente mais tarde</p>
                </section>
              </div>
        </div>
  )
}


