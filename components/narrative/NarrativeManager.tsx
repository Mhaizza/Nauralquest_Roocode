"use client";

import React, { useState } from 'react';
import NarrativeChoiceCard from './NarrativeChoiceCard';
import { AnimatePresence } from 'framer-motion';

// Temporary sample data
const NARRATIVE_EVENTS = [
    {
        id: 1,
        character: 'Lyra', 
        avatar: '/lyra_avatar.png', // Placeholder path
        text: "A rogue AI is flooding the network with corrupted data. We need to shut it down, but the direct approach is risky. Do you want to try and reason with it, or should we deploy the brute-force firewall?",
        choices: { left: 'Reason', right: 'Firewall' }
    },
    {
        id: 2,
        character: 'Jax',
        avatar: '/jax_avatar.png',
        text: "That data node you just accessed... it's a trap. A rival faction is trying to bait us. We can use this. We can feed them false intel, or we can triangulate their position.",
        choices: { left: 'Feed False Intel', right: 'Triangulate' }
    },
    {
        id: 3,
        character: 'Oracle',
        avatar: '/oracle_avatar.png',
        text: "I've intercepted a high-density data packet, encrypted with Blackstone protocols. It could be valuable, but decrypting it will draw a lot of attention. Should I proceed?",
        choices: { left: 'Lie Low', right: 'Decrypt' }
    }
];

const NarrativeManager = () => {
    const [events, setEvents] = useState(NARRATIVE_EVENTS);

    const handleChoice = (choice: 'left' | 'right') => {
        console.log("Chose:", choice);
        // Remove the top card from the stack
        setEvents(currentEvents => currentEvents.slice(1));
    };

    return (
        <div className="relative flex items-center justify-center w-full h-[600px]">
            <AnimatePresence>
                {events.length > 0 ? (
                    <NarrativeChoiceCard 
                        key={events[0].id} 
                        event={events[0]} 
                        onChoice={handleChoice} 
                    />
                ) : (
                    <div className="text-center p-8 bg-black/30 rounded-lg">
                        <h2 className="text-2xl font-bold text-white">Transmission Over</h2>
                        <p className="text-gray-400 mt-2">No new narrative events at this time.</p>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NarrativeManager;
