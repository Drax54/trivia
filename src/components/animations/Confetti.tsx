import React, { useEffect } from 'react';

export default function Confetti() {
  useEffect(() => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
    const confettiCount = 150;
    
    const createConfetti = () => {
      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        confetti.className = 'absolute w-2 h-2 rounded-full pointer-events-none';
        confetti.style.backgroundColor = color;
        confetti.style.left = `${x}px`;
        confetti.style.top = `${y}px`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.animation = `confetti 1s ease-out forwards`;
        document.getElementById('confetti-container')?.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 1000);
      }
    };

    createConfetti();
  }, []);

  return <div id="confetti-container" className="fixed inset-0 pointer-events-none z-50" />;
}