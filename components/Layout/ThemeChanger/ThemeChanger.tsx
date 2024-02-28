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

    const lightClass = theme === 'light' ? styles.light : '';

    return (
        <div className={styles.container}>
            <span className={`${styles.switch_night} ${lightClass}`}>
                Night
            </span>
            <button
                onClick={toggleTheme}
                className={styles.switch}
                defaultChecked={theme === 'light'}
                aria-label={`Switch to ${
                    theme === 'light' ? 'dark' : 'light'
                } mode`}
            >
                <span className={`${styles.switch_slider} ${lightClass}`} />
            </button>
            <span className={`${styles.switch_day} ${lightClass}`}>Day</span>
        </div>
    );
};

export default ThemeChanger;
