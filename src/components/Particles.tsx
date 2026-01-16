import React, { useEffect, useRef, useState } from 'react';

const Particles = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const particlesRef = useRef<any[]>([]);

    // Mouse tracking
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Particle System
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Initialize particles
        const particleCount = window.innerWidth < 768 ? 30 : 100;
        particlesRef.current = Array.from({ length: particleCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            speedY: Math.random() * 0.5 + 0.2,
            speedX: (Math.random() - 0.5) * 0.3,
            opacity: Math.random() * 0.5 + 0.2,
            color: ['#FCD34D', '#F8FAFC', '#93C5FD'][Math.floor(Math.random() * 3)],
            angle: Math.random() * Math.PI * 2,
            frequency: Math.random() * 0.02 + 0.01
        }));

        let animationId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((p) => {
                // Update position with organic movement
                p.y -= p.speedY;
                p.x += Math.sin(p.angle) * 0.5;
                p.angle += p.frequency;

                // Cursor attraction
                const dx = mousePos.x - p.x;
                const dy = mousePos.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const attractionRadius = 150;

                if (distance < attractionRadius) {
                    const force = (attractionRadius - distance) / attractionRadius;
                    p.x += dx * force * 0.03;
                    p.y += dy * force * 0.03;
                }

                // Breathing opacity
                p.opacity = 0.3 + Math.sin(Date.now() * 0.001 + p.angle * 10) * 0.4;

                // Wrap around
                if (p.y < 0) p.y = canvas.height;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;

                // Draw particle with glow
                ctx.shadowBlur = 15;
                ctx.shadowColor = p.color;
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.opacity;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, [mousePos]);

    return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" />;
};

export default Particles;
