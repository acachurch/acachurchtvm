import React, { useRef, useState, memo } from "react";
import { motion } from "framer-motion";

const SpotlightCard = memo(({ children, className = "", spotlightColor = "rgba(255, 255, 255, 0.25)" }) => {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className={className}
            style={{
                position: "relative",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.1)",
                background: "white",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                willChange: "transform"
            }}
        >
            <div
                style={{
                    position: "absolute",
                    pointerEvents: "none",
                    inset: "-1px",
                    opacity: opacity,
                    transition: "opacity 300ms",
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
                    willChange: "opacity"
                }}
            />
            {children}
        </motion.div>
    );
});

SpotlightCard.displayName = 'SpotlightCard';

export default SpotlightCard;
