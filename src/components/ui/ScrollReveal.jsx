import React, { useRef, memo } from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollReveal = memo(({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.6,
    className = ''
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const directions = {
        up: { y: 60, x: 0 },
        down: { y: -60, x: 0 },
        left: { y: 0, x: 60 },
        right: { y: 0, x: -60 }
    };

    const initial = {
        opacity: 0,
        ...directions[direction]
    };

    const animate = {
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : directions[direction].y,
        x: isInView ? 0 : directions[direction].x
    };

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={animate}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            className={className}
            style={{ willChange: isInView ? 'auto' : 'transform, opacity' }}
        >
            {children}
        </motion.div>
    );
});

ScrollReveal.displayName = 'ScrollReveal';

export default ScrollReveal;
