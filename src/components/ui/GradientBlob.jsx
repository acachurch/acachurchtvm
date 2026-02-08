import React, { memo } from 'react';
import { motion } from 'framer-motion';

const GradientBlob = memo(({ color1 = '#D4A373', color2 = '#E76F51', size = 400, top, left, right, bottom, delay = 0 }) => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
                x: [0, 30, 0],
                y: [0, -30, 0]
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                delay,
                ease: "easeInOut"
            }}
            style={{
                position: 'absolute',
                width: size,
                height: size,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${color1}, ${color2})`,
                filter: 'blur(80px)',
                top,
                left,
                right,
                bottom,
                zIndex: 0,
                pointerEvents: 'none',
                willChange: 'transform, opacity'
            }}
        />
    );
});

GradientBlob.displayName = 'GradientBlob';

export default GradientBlob;
