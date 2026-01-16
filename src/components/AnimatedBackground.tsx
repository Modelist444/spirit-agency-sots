import React from 'react';

const AnimatedBackground = () => {
    return (
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
    );
};

export default AnimatedBackground;
