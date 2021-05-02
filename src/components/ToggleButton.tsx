  
import React, {useContext, useEffect, useState} from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { ThemeContext } from "../contexts/ThemeContext";


import styles from '../styles/components/ToggleButton.module.css';

export function ToggleButton(){
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    if (isDarkMode) {
      setIsDarkMode(false);
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      setIsDarkMode(true);
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
        setTheme(localTheme);
    } else {
      setTheme('light');
    }
    if (localTheme === 'dark') {
      setIsDarkMode(true)
    }
  }, [isDarkMode, theme]);

  return (
    <header className={styles.darkModeToggle}>
      <DarkModeToggle
        onChange={toggleTheme}
        checked={isDarkMode}
        size={60}
        
      />
    </header>
  );
};