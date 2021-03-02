import '../styles/global.css'

import { ChallengesProvider } from '../contexts/ChallengesContext'
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext'


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
