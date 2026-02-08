import React, { memo } from "react";
import { motion } from "framer-motion";

const SplitText = memo(({ children, className = "", delay = 0 }) => {
    const text = typeof children === "string" ? children : "";
    const words = text.split(" ");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay },
        },
    };

    const wordVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.05 }
        }
    };

    const charVariants = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{
                display: "flex",
                flexWrap: "nowrap",
                overflow: "visible",
                justifyContent: "center",
                width: "100%",
                willChange: "opacity"
            }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {words.map((word, i) => (
                <motion.div
                    variants={wordVariants}
                    key={i}
                    style={{
                        display: "inline-block",
                        whiteSpace: "nowrap",
                        marginRight: i === words.length - 1 ? 0 : "0.25em",
                        flexShrink: 0,
                        willChange: "transform"
                    }}
                >
                    {word.split("").map((char, index) => (
                        <motion.span
                            variants={charVariants}
                            key={index}
                            style={{
                                display: "inline-block",
                                willChange: "transform, opacity"
                            }}
                        >
                            {char}
                        </motion.span>
                    ))}
                </motion.div>
            ))}
        </motion.div>
    );
});

SplitText.displayName = 'SplitText';

export default SplitText;
