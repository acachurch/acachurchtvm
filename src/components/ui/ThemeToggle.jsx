import React, { useState, useEffect, memo } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = memo(() => {
    const [isDark, setIsDark] = useState(() => {
        // Check localStorage or system preference
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Apply theme to document
        if (isDark) {
            document.documentElement.classList.add('dark-theme');
        } else {
            document.documentElement.classList.remove('dark-theme');
        }
        // Save preference
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <button
            onClick={toggleTheme}
            style={{
                background: isHovered ? 'var(--color-primary)' : 'transparent',
                border: '2px solid var(--color-primary)',
                borderRadius: '50%',
                width: '45px',
                height: '45px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                transform: isHovered ? 'scale(1.1)' : 'scale(1)'
            }}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                initial={false}
                animate={{
                    rotate: isDark ? 180 : 0,
                    scale: isDark ? 0 : 1
                }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Sun size={22} color={isHovered ? 'white' : 'var(--color-primary)'} />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    rotate: isDark ? 0 : -180,
                    scale: isDark ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Moon size={22} color={isHovered ? 'white' : 'var(--color-primary)'} />
            </motion.div>
        </button>
    );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
