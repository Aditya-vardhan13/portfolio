'use client';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [step, setStep] = useState(0);

    useEffect(() => {
        // Phase 1: "Say my name" -> Wait 1.5s -> Name
        const timer1 = setTimeout(() => setStep(1), 1500);

        // Phase 2: Name -> Wait 1s -> "You're goddamn right"
        const timer2 = setTimeout(() => setStep(2), 2500);

        // Phase 3: Quote -> Wait 1s -> Show rest
        const timer3 = setTimeout(() => setStep(3), 3500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, []);

    return (
        <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '60px' }}>
            <div className="container">
                <div style={{ minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                    {/* Step 0: Say my name */}
                    <h1 style={{
                        fontSize: 'clamp(3rem, 10vw, 5rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '1.5rem',
                        display: step === 0 ? 'block' : 'none',
                        animation: 'fadeIn 0.5s ease-in'
                    }}>
                        Say my name!
                    </h1>

                    {/* Step 1 & 2: Name */}
                    <div style={{
                        display: step >= 1 ? 'block' : 'none',
                        animation: 'fadeIn 0.5s ease-in'
                    }}>
                        <h1 style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                            <span style={{ color: 'var(--primary)', border: '4px solid var(--primary)', padding: '0 12px', display: 'inline-block', marginRight: '8px' }}>Ad</span>itya Vardhan
                        </h1>
                    </div>

                    {/* Step 2: You're goddamn right */}
                    <h2 style={{
                        fontSize: 'clamp(1.5rem, 5vw, 2rem)',
                        color: 'var(--accent)',
                        marginBottom: '1rem',
                        fontWeight: '600',
                        opacity: step >= 2 ? 1 : 0,
                        transform: step >= 2 ? 'translateY(0)' : 'translateY(20px)',
                        transition: 'opacity 0.5s ease, transform 0.5s ease',
                        height: step >= 1 ? 'auto' : 0,
                        overflow: 'hidden'
                    }}>
                        You&apos;re goddamn right!
                    </h2>

                    {/* Subtitle / Role */}
                    <div style={{
                        opacity: step >= 3 ? 1 : 0,
                        transition: 'opacity 1s ease',
                        pointerEvents: step >= 3 ? 'auto' : 'none'
                    }}>
                        <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', color: 'var(--text-muted)', marginBottom: '1.5rem', fontWeight: '400' }}>
                            AI Engineer by Profession <span style={{ color: 'var(--accent)' }}>{'//'}</span> Software Engineer by Heart
                        </h3>

                        <div style={{ maxWidth: '600px', marginBottom: '2rem', color: 'var(--text-muted)', lineHeight: '1.6', fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>
                            <p>
                                Based in Bengaluru, India. I specialize in building AI-driven applications and scalable software solutions.
                                Passionate about Large Language Models, Generative AI, and Distributed Systems.
                            </p>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <a href="https://drive.google.com/file/d/1XNrpv-rjlof9WKOgcds6Dz-tSKTMdu3P/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{
                                background: 'var(--primary)',
                                color: 'white',
                                padding: '12px 24px',
                                borderRadius: '4px',
                                fontWeight: '600',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                Download Resume
                            </a>
                            <a href="mailto:adityavk1310@gmail.com" style={{
                                border: '1px solid var(--border)',
                                padding: '12px 24px',
                                borderRadius: '4px',
                                color: 'var(--text-main)',
                                fontWeight: '500'
                            }}>
                                Contact Me
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
