import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CardSwap = memo(({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const variants = {
        enter: (direction) => ({
            rotateY: direction > 0 ? 90 : -90,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            rotateY: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction) => ({
            rotateY: direction < 0 ? 90 : -90,
            opacity: 0,
            scale: 0.8
        })
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div style={{
            perspective: '1000px',
            width: '100%',
            maxWidth: '500px',
            margin: '0 auto'
        }}>
            <div style={{ position: 'relative', height: '400px' }}>
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentIndex}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            rotateY: { type: 'spring', stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 },
                            scale: { duration: 0.2 }
                        }}
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                            transformStyle: 'preserve-3d',
                            willChange: 'transform'
                        }}
                    >
                        <img
                            src={images[currentIndex].image}
                            alt={images[currentIndex].title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                            padding: '2rem',
                            color: 'white'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                                {images[currentIndex].title}
                            </h3>
                            <p style={{ opacity: 0.9 }}>{images[currentIndex].category}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation */}
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                marginTop: '2rem'
            }}>
                <button
                    onClick={handlePrev}
                    className="btn btn-outline"
                    style={{ minWidth: '120px' }}
                >
                    Previous
                </button>
                <button
                    onClick={handleNext}
                    className="btn btn-primary"
                    style={{ minWidth: '120px' }}
                >
                    Next
                </button>
            </div>

            {/* Counter */}
            <div style={{
                textAlign: 'center',
                marginTop: '1rem',
                color: 'var(--color-text-muted)',
                fontSize: '0.95rem'
            }}>
                {currentIndex + 1} / {images.length}
            </div>
        </div>
    );
});

CardSwap.displayName = 'CardSwap';

export default CardSwap;
