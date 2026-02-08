import React, { memo } from 'react';
import { motion } from 'framer-motion';

const PillNav = memo(({ options, activeOption, onOptionChange }) => {
    return (
        <div className="pill-nav-container" style={{
            display: 'inline-flex',
            background: 'var(--color-surface)',
            padding: '0.4rem',
            borderRadius: '50px',
            border: '1px solid rgba(233, 196, 106, 0.2)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            position: 'relative',
            flexWrap: 'wrap',
            maxWidth: '100%'
        }}>
            {options.map((option) => {
                const isActive = activeOption === option.value;

                return (
                    <button
                        key={option.value}
                        onClick={() => onOptionChange(option.value)}
                        className="pill-nav-button"
                        style={{
                            position: 'relative',
                            padding: '0.8rem 1.5rem',
                            border: 'none',
                            background: 'transparent',
                            color: isActive ? '#000' : 'var(--color-text-muted)',
                            fontWeight: isActive ? 700 : 500,
                            fontSize: '0.95rem',
                            cursor: 'pointer',
                            transition: 'color 0.3s ease',
                            zIndex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            minWidth: '100px',
                            justifyContent: 'center',
                            flex: '1 1 auto'
                        }}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="pill-nav-indicator"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                                    borderRadius: '50px',
                                    zIndex: -1,
                                    boxShadow: '0 4px 15px rgba(233, 196, 106, 0.4)'
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 500,
                                    damping: 30
                                }}
                            />
                        )}
                        {option.icon && <span>{option.icon}</span>}
                        <span>{option.label}</span>
                    </button>
                );
            })}
        </div>
    );
});

PillNav.displayName = 'PillNav';

export default PillNav;
