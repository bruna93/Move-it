import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/68197761?s=460&u=3bc2923f43adcd85a005c9297fd68cbd6655aee6&v=4" alt="Bruna Carvalho" />
            <div>
                <strong>Bruna Carvalho</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}