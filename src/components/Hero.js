export default function Hero() {
    return (
        <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '60px' }}>
            <div className="container">
                <h1 style={{ fontSize: '5rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '1.5rem' }}>
                    Hello, I&apos;m <br />
                    <span style={{ color: 'var(--primary)', border: '4px solid var(--primary)', padding: '0 12px', display: 'inline-block', marginRight: '8px' }}>Ad</span>itya Vardhan.
                </h1>
                <h2 style={{ fontSize: '2rem', color: 'var(--text-muted)', marginBottom: '2rem', fontWeight: '400' }}>
                    AI Engineer by Profession <span style={{ color: 'var(--accent)' }}>//</span> Software Engineer by Heart
                </h2>

                <div style={{ maxWidth: '600px', marginBottom: '2.5rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                    <p>
                        Based in Bengaluru, India. I specialize in building AI-driven applications and scalable software solutions.
                        Passionate about Large Language Models, Generative AI, and Distributed Systems.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href="https://drive.google.com/file/d/1O9oplZNTWbmxUKIcTYA8zOsBoYPWr1ch/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{
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

                <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    <span>+91 6361145311</span>
                    <span>•</span>
                    <span>adityavk1310@gmail.com</span>
                </div>
            </div>
        </section>
    );
}
