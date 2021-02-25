import styles from '../styles/components/Profile.module.css'
export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/ardotheedu.png" alt="Eduardo de Sá" />
            <div>
                <strong>Eduardo de Sá</strong>
                <p>
                    <img src="icons/level.svg" alt="" /> 
                    Level 01
                </p>
            </div>
        </div>
    )
}