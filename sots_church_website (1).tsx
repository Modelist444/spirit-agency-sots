import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Send, Calendar, BookOpen, Heart, Phone, Mail, MapPin, Youtube, Facebook, Instagram, Play, Download, Clock } from 'lucide-react';

const NewWineSOTS = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Advanced Particle System
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
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

    let animationId;
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

  const scrollToSection = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen relative overflow-hidden">
      
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" />

      {/* Animated Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute w-[600px] h-[600px] bg-amber-500 rounded-full blur-[120px] opacity-20"
          style={{
            animation: 'float1 40s ease-in-out infinite',
            top: '10%',
            left: '20%'
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] bg-blue-600 rounded-full blur-[100px] opacity-15"
          style={{
            animation: 'float2 50s ease-in-out infinite',
            bottom: '20%',
            right: '15%'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] bg-purple-600 rounded-full blur-[90px] opacity-10"
          style={{
            animation: 'float3 45s ease-in-out infinite',
            top: '50%',
            left: '50%'
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="text-4xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                🕎
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                  New Wine SOTS
                </h1>
                <p className="text-xs text-slate-400">School of the Spirit</p>
              </div>
            </div>
            
            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="lg:hidden text-amber-400 p-2 hover:bg-amber-500/10 rounded-lg transition-all"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <div className="hidden lg:flex space-x-1">
              {['home', 'about', 'leadership', 'sermons', 'testimonies', 'prayer', 'events', 'gallery', 'giving', 'contact'].map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 capitalize relative group ${
                    activeSection === section 
                      ? 'text-amber-300' 
                      : 'text-slate-300 hover:text-amber-200'
                  }`}
                >
                  {activeSection === section && (
                    <span className="absolute inset-0 bg-amber-500/20 rounded-lg animate-pulse" />
                  )}
                  <span className="relative">{section}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-slate-950/95 backdrop-blur-xl border-t border-amber-500/20 animate-slideDown">
            {['home', 'about', 'leadership', 'sermons', 'testimonies', 'prayer', 'events', 'gallery', 'giving', 'contact'].map(section => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="block w-full text-left px-6 py-3 text-slate-300 hover:bg-amber-500/10 hover:text-amber-200 capitalize transition-all"
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
        {/* Floating Menorah */}
        <div 
          className="absolute top-1/4 left-1/2 -translate-x-1/2 text-[300px] opacity-5 pointer-events-none"
          style={{ animation: 'gentleFloat 20s ease-in-out infinite' }}
        >
          🕎
        </div>
        
        {/* Divine Light Rays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute -top-1/2 left-0 w-1 h-full bg-gradient-to-b from-amber-400/30 via-amber-400/10 to-transparent blur-sm"
            style={{ animation: 'rotateRay 25s linear infinite', transformOrigin: 'top center' }}
          />
          <div 
            className="absolute -top-1/2 right-0 w-1 h-full bg-gradient-to-b from-blue-400/20 via-blue-400/5 to-transparent blur-sm"
            style={{ animation: 'rotateRay 30s linear infinite reverse', transformOrigin: 'top center' }}
          />
        </div>
        
        <div className="text-center z-20 px-4 max-w-5xl mx-auto space-y-8">
          {/* Floating Dove */}
          <div 
            className="inline-block"
            style={{ animation: 'doveFloat 6s ease-in-out infinite' }}
          >
            <div className="text-7xl filter drop-shadow-[0_0_20px_rgba(252,211,77,0.6)]">🕊️</div>
          </div>
          
          <h2 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent bg-[length:200%_auto]"
            style={{ animation: 'shimmer 3s linear infinite, fadeInUp 1s ease-out' }}
          >
            New Wine
          </h2>
          
          <h3 
            className="text-3xl md:text-5xl text-slate-300 mb-8"
            style={{ animation: 'fadeInUp 1s ease-out 0.3s both' }}
          >
            School of the Spirit
          </h3>
          
          <p 
            className="text-lg md:text-2xl text-amber-100/90 italic max-w-3xl mx-auto leading-relaxed mb-4"
            style={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}
          >
            "But the hour is coming, and is now here, when the true worshipers will worship the Father in spirit and truth"
          </p>
          <p 
            className="text-sm md:text-base text-slate-400 mb-12"
            style={{ animation: 'fadeInUp 1s ease-out 0.8s both' }}
          >
            — John 4:23
          </p>

          <p 
            className="text-base md:text-xl text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ animation: 'fadeInUp 1s ease-out 1s both' }}
          >
            A place where heaven touches earth. Come encounter the presence of God, be transformed by His Spirit, and discover your divine purpose.
          </p>

          <div 
            className="flex flex-wrap justify-center gap-4"
            style={{ animation: 'fadeInUp 1s ease-out 1.2s both' }}
          >
            {[
              { icon: Calendar, text: 'Join Us', action: 'events' },
              { icon: Play, text: 'Watch Sermons', action: 'sermons' },
              { icon: Heart, text: 'Share Testimony', action: 'testimonies' },
              { icon: Send, text: 'Prayer Request', action: 'prayer' }
            ].map((btn, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(btn.action)}
                className={`group px-8 py-4 rounded-full transition-all duration-500 flex items-center gap-2 relative overflow-hidden ${
                  i === 0 
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 shadow-lg shadow-amber-500/30' 
                    : 'bg-white/10 backdrop-blur-sm border border-amber-400/30 hover:bg-white/20 hover:border-amber-400/60'
                }`}
                style={{ animation: `fadeInUp 1s ease-out ${1.2 + i * 0.1}s both` }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
                <btn.icon size={20} className="relative z-10 group-hover:scale-110 transition-transform" />
                <span className="relative z-10">{btn.text}</span>
              </button>
            ))}
          </div>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
          style={{ animation: 'bounce 2s infinite' }}
        >
          <ChevronDown className="text-amber-400" size={40} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen py-24 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div 
              className="text-6xl mb-4 inline-block"
              style={{ animation: 'gentleFloat 8s ease-in-out infinite' }}
            >
              ✨
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
              About Us
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: '🎯', title: 'Our Mission', text: 'To raise a generation of Spirit-filled believers who walk in divine power, understanding, and intimacy with God, transforming nations through the demonstration of His glory.' },
              { icon: '⚡', title: 'Our Faith', text: 'We believe in the baptism of the Holy Spirit, the gifts of the Spirit, and the supernatural power of God operating today. We are a community grounded in Scripture and led by the Spirit.' },
              { icon: '📖', title: 'Our History', text: 'Founded in a divine encounter, New Wine School of the Spirit began as a small prayer gathering and has grown into a vibrant community where thousands have encountered God\'s transforming presence.' }
            ].map((card, i) => (
              <div
                key={i}
                className="group bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-amber-500/20 hover:border-amber-500/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(245,158,11,0.3)] relative overflow-hidden"
                style={{ animation: `fadeInUp 0.8s ease-out ${i * 0.2}s both` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 via-amber-500/0 to-amber-500/0 group-hover:from-amber-500/5 group-hover:via-amber-500/10 group-hover:to-transparent transition-all duration-700" />
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-500 inline-block">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-amber-300 mb-4 group-hover:text-amber-200 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors">
                  {card.text}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-500/10 via-blue-500/10 to-purple-500/10 p-12 rounded-2xl border border-amber-400/30 hover:border-amber-400/60 transition-all duration-500 group">
            <p className="text-xl md:text-2xl text-center text-slate-200 leading-relaxed italic group-hover:scale-105 transition-transform duration-500">
              "We are a house of prayer, a school of the Spirit, and a family on mission. Here, the supernatural is normal, transformation is expected, and God's presence is our greatest treasure."
            </p>
          </div>
        </div>
      </section>

      {/* Sermons Preview */}
      <section id="sermons" className="min-h-screen py-24 px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-6xl mb-4 inline-block" style={{ animation: 'gentleFloat 7s ease-in-out infinite' }}>
              📺
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
              Sermons & Teachings
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
      