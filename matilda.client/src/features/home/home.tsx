import React, { useRef, useLayoutEffect, useState } from 'react';
import { motion } from 'framer-motion';
import toychest from '../../assets/toychest.png';
import { xylophoneColors } from '../../global-constants/constants';

const Home = () => {
    const textLine1 = 'Welcome to';
    const textLine2 = 'Matilda Nursery';

    const chestRef = useRef(null); // Reference to the toy chest
    const containerRef = useRef(null); // Reference to the text container
    const [chestPosition, setChestPosition] = useState({ x: 0, y: 0 });

    // Calculate the chest's position relative to the container
    useLayoutEffect(() => {
        if (chestRef.current && containerRef.current) {
            const chestRect = chestRef.current.getBoundingClientRect();
            const containerRect = containerRef.current.getBoundingClientRect();

            // Calculate chest position relative to the container
            setChestPosition({
                x: chestRect.left - containerRect.left + chestRect.width / 2,
                y: chestRect.top - containerRect.top + chestRect.height / 2,
            });
        }
    }, []);

    let letterIndex = 0;
    // Function to render each line of text with target positions
    const renderTextLine = (text, x: number, targetY: number, startY: number, xOffset: number) => {

        const delays = Array(text.length)
            .fill(0)
            .map(() => Math.random() * 2); // Random delay between 0 and 2 seconds

        // Normalize delays so all animations complete within a maximum duration
        const maxDelay = Math.max(...delays);
        const normalizedDelays = delays.map((delay) => (delay / maxDelay) * 1.5); // Scale to max 1.5s

        return (
            <div style={{ position: 'relative', display: 'flex', gap: '5px' }}>
                {text.split('').map((char, index) => {
                    const color = xylophoneColors[Math.floor(Math.random() * xylophoneColors.length)] // Cycle through colors
                    letterIndex = letterIndex + index;

                    return (
                        <div
                            key={index}
                            style={{
                                position: 'relative',
                                display: 'inline-block',
                                width: '50px', // Define space for each letter
                                height: '50px',
                            }}
                        >
                            {/* Invisible target div */}
                            <div
                                style={{
                                    visibility: 'hidden', // Invisible div for final position
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    height: '100%',
                                    fontSize: '50px',
                                    fontFamily: '"Comic Sans MS", cursive, sans-serif',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    zIndex: 200,
                                    border:'solid',
                                    borderRadius: '5px', // Rounded edges
                                    boxShadow: '0 3px 5px rgba(0,0,0,0.2)',                    // Subtle shadow for 3D effect

                                    // fontWeight: 'bold',
                                    // '&:hover': {
                                    //     // Maintain the hover effect, perhaps brighten the color
                                    //     backgroundColor: '#ff8a65',
                                    // },
                                }}
                            >
                                {char.trim() ? char : '\u00A0'}
                            </div>

                            {/* Animated letter */}
                            <motion.div
                                initial={{
                                    x: chestPosition.x, // Start at chest's position
                                    y: startY, // Start at chest's position
                                    opacity: 1,
                                    left: xOffset -(index * 55)
                                }}
                                animate={{
                                    left: 0, // Move to the target position
                                    y: targetY,
                                    opacity: 1,
                                }}
                                transition={{
                                    duration: 1, // Animation duration
                                    delay: normalizedDelays[index], // Stagger animation
                                    ease: 'easeInOut',
                                }}
                                style={{
                                    backgroundColor: color,
                                    position: 'relative', // Allow animation to align with target
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '50px',
                                    fontFamily: '"Comic Sans MS", cursive, sans-serif',
                                    fontWeight: 'bold',
                                    color: 'white',
                                    visibility: char.trim() ? "visible" : "hidden",
                                    border:'solid',
                                    borderRadius: '5px', // Rounded edges
                                    boxShadow: '0 3px 5px rgba(0,0,0,0.2)',
                                    textShadow: '6px 4px 2px black',// Subtle shadow for 3D effect

                                    // fontWeight: 'bold',
                                    // '&:hover': {
                                    //     // Maintain the hover effect, perhaps brighten the color
                                    //     backgroundColor: '#ff8a65',
                                    // },
                                }}
                            >
                                {char.trim() ? char : '\u00A0'}
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div
            ref={containerRef}
            style={{
                position: 'relative', // Make this container a reference point for child positions
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px',
                height: '500px', // Ensure sufficient height to fit animations
            }}
        >
            {/* Render first line */}
            <div style={{ marginBottom: '10px' }}>{renderTextLine(textLine1, -300 ,0, 280, 250)}</div>

            {/* Render second line */}
            <div style={{ marginBottom: '10px' }}>{renderTextLine(textLine2, -600, 50,180, 675)}</div>

            {/* Toy Chest Image */}
            <img
                ref={chestRef}
                src={toychest}
                style={{
                    height: '150px',
                    width: 'auto',
                    marginTop: '250px',
                    position: 'absolute', // Keep it relative to the container
                    zIndex: 100
                }}
                alt="Toy Chest"
            />
        </div>
    );
};

export default Home;
