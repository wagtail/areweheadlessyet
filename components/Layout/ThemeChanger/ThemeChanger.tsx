import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import styles from './ThemeChanger.module.scss';

export const ThemeChanger = () => {
    // This is done to avoid hydration mismatch error.
    // See https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch.
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return null;
    }

    const toggleTheme = () =>
        theme === 'light' ? setTheme('dark') : setTheme('light');

    return (
        <div className={styles.container}>
            <span
                className={`${styles.switch_night} ${
                    theme === 'light' && styles.light
                }`}
            >
                Night
            </span>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    onClick={toggleTheme}
                    defaultChecked={theme === 'light'}
                />
                <span className={styles.slider} />
            </label>
            <span
                className={`${styles.switch_day} ${
                    theme === 'light' && styles.light
                }`}
            >
                Day
            </span>
        </div>
    );
};

export default ThemeChanger;
