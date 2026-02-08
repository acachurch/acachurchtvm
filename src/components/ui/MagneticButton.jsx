import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const MagneticButton = ({ children, className = '', ...props }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useSpring(0, { stiffness: 300, damping: 20 });
    const y = useSpring(0, { stiffness: 300, damping: 20 });

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        x.set(distanceX * 0.3);
        y.set(distanceY * 0.3);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            style={{ x, y }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={className}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default MagneticButton;
