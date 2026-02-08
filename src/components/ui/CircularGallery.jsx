import React, { useState, memo } from 'react';
import { motion } from 'framer-motion';

const CircularGallery = memo(({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const imageCount = images.length;

    // Responsive radius based on screen size
    const getResponsiveSize = () => {
        if (window.innerWidth < 480) return { radius: 100, size: 250, imageSize: 60 };
        if (window.innerWidth < 768) return { radius: 140, size: 350, imageSize: 80 };
        return { radius: 200, size: 500, imageSize: 120 };
    };

    const { radius, size, imageSize } = getResponsiveSize();

    return (
        <div className="circular-gallery-container" style={{
            width: '100%',
            maxWidth: '700px',
            margin: '0 auto',
            padding: '2rem'
        }}>
            <div className="circular-gallery-circle" style={{
                position: 'relative',
                width: `${size}px`,
                height: `${size}px`,
                margin: '0 auto'
            }}>
                {/* Center Title */}
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        zIndex: 5,
                        pointerEvents: 'none',
                        padding: '0 2rem',
                        maxWidth: '300px',
                        margin: '0 auto'
                    }}
                >
                    <h3 style={{
                        fontSize: '1.5rem',
                        marginBottom: '0.5rem',
                        color: 'var(--color-text)',
                        fontWeight: 700,
                        textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto',
                        maxWidth: '100%'
                    }}>
                        {images[activeIndex].title}
                    </h3>
                    <p style={{
                        fontSize: '1rem',
                        color: 'var(--color-primary)',
                        fontWeight: 600,
                        textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        maxWidth: '100%'
                    }}>
                        {images[activeIndex].category}
                    </p>
                </motion.div>

                {/* Circular Images */}
                {images.map((image, index) => {
                    const angle = (index / imageCount) * 2 * Math.PI - Math.PI / 2;
                    const center = size / 2;
                    const x = center + radius * Math.cos(angle);
                    const y = center + radius * Math.sin(angle);
                    const isActive = index === activeIndex;

                    return (
                        <motion.div
                            key={image.id}
                            initial={false}
                            animate={{
                                left: `${x}px`,
                                top: `${y}px`,
                                scale: isActive ? 1.4 : 0.85,
                                zIndex: isActive ? 10 : 1
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 300,
                                damping: 30
                            }}
                            onClick={() => setActiveIndex(index)}
                            className="circular-gallery-image"
                            style={{
                                position: 'absolute',
                                width: `${imageSize}px`,
                                height: `${imageSize}px`,
                                marginLeft: `-${imageSize / 2}px`,
                                marginTop: `-${imageSize / 2}px`,
                                borderRadius: '50%',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                boxShadow: isActive
                                    ? '0 20px 60px rgba(0,0,0,0.3)'
                                    : '0 10px 30px rgba(0,0,0,0.15)',
                                border: isActive ? '4px solid var(--color-primary)' : '3px solid white',
                                willChange: 'transform',
                                transition: 'box-shadow 0.3s ease'
                            }}
                        >
                            <img
                                src={image.image}
                                alt={image.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </motion.div>
                    );
                })}
            </div>

            {/* Navigation Dots */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                marginTop: '2rem'
            }}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        style={{
                            width: activeIndex === index ? '30px' : '10px',
                            height: '10px',
                            borderRadius: '5px',
                            border: 'none',
                            background: activeIndex === index ? 'var(--color-primary)' : 'rgba(0,0,0,0.2)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}
                        aria-label={`View ${images[index].title}`}
                    />
                ))}
            </div>

            {/* Active Image Info Card */}
            <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    textAlign: 'center',
                    marginTop: '2rem',
                    padding: '2rem',
                    background: 'var(--color-surface)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    border: '2px solid var(--color-primary)'
                }}
            >
                <h3 style={{
                    fontSize: '2rem',
                    marginBottom: '0.5rem',
                    color: 'var(--color-text)',
                    fontWeight: 700
                }}>
                    {images[activeIndex].title}
                </h3>
                <p style={{
                    fontSize: '1.2rem',
                    color: 'var(--color-primary)',
                    fontWeight: 500
                }}>
                    {images[activeIndex].category}
                </p>
            </motion.div>
        </div>
    );
});

CircularGallery.displayName = 'CircularGallery';

export default CircularGallery;
