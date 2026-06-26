import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Prophecies from './components/Prophecies';
import PrayerRequest from './components/PrayerRequest';
import Events from './components/Events';
import Sermons from './components/Sermons';
import ContactFooter from './components/ContactFooter';
import Particles from './components/Particles';

function App() {
    const [activeSection, setActiveSection] = useState('home');

    return (
        <div className="bg-slate-950 text-white min-h-screen relative overflow-hidden cinematic-grain">
            {/* Spiritual Overlay - Dark gradient for text readability */}
            <div className="spiritual-overlay" />

            {/* Grid Background */}
            <div className="fixed inset-0 grid-background pointer-events-none z-0" />

            {/* Edge Glows */}
            <div className="edge-glow-left" />
            <div className="edge-glow-right" />
            <div className="edge-glow-top" />

            {/* Particles */}
            <Particles />

            <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

            <main>
                <Hero />
                <About />
                <Gallery />
                <Testimonials />
                <Prophecies />
                <PrayerRequest />
                <Events />
                <Sermons />
            </main>

            <ContactFooter />
        </div>
    );
}

export default App;

