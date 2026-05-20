"use client";
import { useState } from "react";

export default function Level1() {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("สวัสดีเด็กฝึกงาน! ฉันคือ Neural-Bot ช่วยสอนฉันหน่อยว่ารูปนี้คือ 'แมว' หรือไม่?");

  const handleAnswer = (isCat: boolean) => {
    if (isCat) {
      setScore(score + 1);
      setMessage("ถูกต้อง! ข้อมูลนี้ช่วยให้ฉันฉลาดขึ้นมาก!");
    } else {
      setMessage("โอ๊ะ! นั่นไม่ใช่แมวนะ ลองใหม่อีกครั้ง!");
    }
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono">
      <div className="max-w-2xl mx-auto border border-green-800 p-6 rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.2)]">
        <h1 className="text-3xl font-bold mb-6 text-center uppercase tracking-widest">Level 1: AI Apprentice</h1>
        
        <div className="bg-gray-900 p-4 rounded mb-6 border border-green-900">
          <p className="text-lg">{message}</p>
        </div>

        <div className="flex justify-center gap-4">
          <button 
            onClick={() => handleAnswer(true)} 
            className="bg-green-900 hover:bg-green-700 text-white px-6 py-2 rounded border border-green-500 transition-all"
          >
            ใช่ แมว!
          </button>
          <button 
            onClick={() => handleAnswer(false)} 
            className="bg-red-900 hover:bg-red-700 text-white px-6 py-2 rounded border border-red-500 transition-all"
          >
            ไม่ใช่
          </button>
        </div>

        <div className="mt-8 text-center border-t border-green-800 pt-4">
          <p className="text-xl">คะแนนความฉลาดของ AI: <span className="text-white font-bold">{score}</span></p>
        </div>
      </div>
    </div>
  );
}
