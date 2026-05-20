"use client";

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

// Assuming a structure for the narrative event
interface NarrativeEvent {
    id: number;
    character: string;
    avatar: string;
    text: string;
    choices: {
        left: string;
        right: string;
    };
}

interface NarrativeChoiceCardProps {
    event: NarrativeEvent;
    onChoice: (choice: 'left' | 'right') => void;
}

const NarrativeChoiceCard: React.FC<NarrativeChoiceCardProps> = ({ event, onChoice }) => {
    const x = useMotionValue(0);
    const [isGone, setIsGone] = useState(false);

    const handleSwipe = (latest: { x: number }) => {
        if (isGone) return;
        if (latest.x > 100) {
            setIsGone(true);
            onChoice('right');
        } else if (latest.x < -100) {
            setIsGone(true);
            onChoice('left');
        }
    };
    
    // Visual feedback for choices
    const leftOpacity = useTransform(x, [-100, 0], [1, 0]);
    const rightOpacity = useTransform(x, [0, 100], [0, 1]);
    const rotate = useTransform(x, [-200, 200], [-25, 25]);
    const cardBg = useTransform(x, [-100, 0, 100], 
        ["rgba(255, 0, 128, 0.2)", "rgba(10, 10, 30, 0.7)", "rgba(0, 245, 255, 0.2)"]
    );

    if (isGone) return null;

    return (
        <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ x, rotate, background: cardBg }}
            className="relative w-full max-w-sm h-[500px] rounded-2xl shadow-lg cursor-grab glass-card overflow-hidden"
            onDrag={(_, info) => handleSwipe(info.point)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98, cursor: 'grabbing' }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            {/* Left Choice Indicator */}
            <motion.div style={{ opacity: leftOpacity }} className="absolute top-1/2 left-4 -translate-y-1/2 text-pink-400 font-bold p-2 bg-black/50 rounded">
                {event.choices.left}
            </motion.div>
            
            {/* Right Choice Indicator */}
            <motion.div style={{ opacity: rightOpacity }} className="absolute top-1/2 right-4 -translate-y-1/2 text-cyan-400 font-bold p-2 bg-black/50 rounded">
                {event.choices.right}
            </motion.div>

            <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                <div className="mb-4">
                    <img src={event.avatar} alt={event.character} className="w-24 h-24 rounded-full border-4 border-purple-500/50 object-cover" />
                    <h3 className="text-xl font-bold text-white mt-2" style={{ fontFamily: "var(--font-orbitron)" }}>{event.character}</h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed font-sans">
                    {event.text}
                </p>
            </div>
        </motion.div>
    );
};

export default NarrativeChoiceCard;
