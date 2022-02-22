import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import styles from './ThemeChanger.module.scss';

export const ThemeChanger = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }

    const toggle = () =>
        theme === 'light' ? setTheme('dark') : setTheme('light');

    return (
        <div className={styles.container}>
            <span
                className={`${styles.switch_night} ${
                    theme === 'light' ? styles.light : ''
                }`}
            >
                Night
            </span>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    onClick={toggle}
                    defaultChecked={theme === 'light' ? true : false}
                />
                <span className={styles.slider} />
            </label>
            <span
                className={`${styles.switch_day} ${
                    theme === 'light' ? styles.light : ''
                }`}
            >
                Day
            </span>
        </div>
    );
};

export default ThemeChanger;
