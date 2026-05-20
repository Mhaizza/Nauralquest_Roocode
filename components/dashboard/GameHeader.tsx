
import React from 'react';
import { Zap, Shield, Gem, BrainCircuit } from 'lucide-react';
import { useGameStore } from '@/store/gameStore';

const GameHeader = () => {
    const { energy, level, xp, gems } = useGameStore.getState();
    const xpPercentage = (xp / 1000) * 100;

    return (
        <header className="fixed top-0 left-0 right-0 bg-black/50 backdrop-blur-md border-b border-purple-500/30 z-50">
            <div className="container mx-auto px-4 py-2">
                <div className="flex items-center justify-between">
                    {/* Left Side: Player Level and Name */}
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full flex items-center justify-center border-2 border-purple-400">
                            <span className="text-white font-bold text-lg">{level}</span>
                        </div>
                        <div>
                            <h2 className="text-white font-semibold text-lg leading-tight">Operator</h2>
                            <div className="w-32 h-2.5 bg-gray-700/50 rounded-full mt-1 overflow-hidden border border-purple-500/50">
                                <div 
                                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500" 
                                    style={{ width: `${xpPercentage}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Resources */}
                    <div className="flex items-center space-x-3 md:space-x-5">
                        <div className="flex items-center space-x-2 bg-gray-800/60 px-3 py-1.5 rounded-full border border-cyan-400/30">
                            <BrainCircuit className="w-5 h-5 text-cyan-400" />
                            <span className="text-white font-bold text-sm">13.37</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-800/60 px-3 py-1.5 rounded-full border border-yellow-400/30">
                            <Zap className="w-5 h-5 text-yellow-400" />
                            <span className="text-white font-bold text-sm">{energy}/100</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-gray-800/60 px-3 py-1.5 rounded-full border border-pink-500/30">
                            <Gem className="w-5 h-5 text-pink-500" />
                            <span className="text-white font-bold text-sm">{gems}</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default GameHeader;
