import Image from 'next/image';

export default function Contact() {
    return (
        <footer id="contact" style={{
            background: 'var(--surface)',
            padding: '40px 0',
            textAlign: 'center',
            borderTop: '1px solid var(--border)',
            marginTop: 'auto'
        }}>
            <div className="container">

                {/* Social Icons */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
                    <a href="mailto:adityavk1310@gmail.com" className="social-icon" aria-label="Email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--text-main)' }}>
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                    </a>

                    <a href="https://github.com/Aditya-vardhan13" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                        <Image src="/github.svg" alt="GitHub" width={24} height={24} style={{ filter: 'brightness(0) invert(1)' }} />
                    </a>

                    <a href="https://www.linkedin.com/in/aditya-vardhan-kammela-403150208/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                        <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} style={{ filter: 'brightness(0) invert(1)' }} />
                    </a>

                    <a href="https://leetcode.com/kammelaaditya/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LeetCode">
                        <Image src="/leetcode.webp" alt="LeetCode" width={24} height={24} style={{ filter: 'brightness(0) invert(1)' }} />
                    </a>
                </div>

                {/* Copyright & Name */}
                <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', justifyContent: 'center', gap: '8px', alignItems: 'center' }}>
                    <span>Aditya Vardhan</span>
                    <span>•</span>
                    <span>© 2026</span>
                    <span>•</span>
                    <span>AI Engineer</span>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '1rem', opacity: 0.7 }}>
                    Breaking Bad Theme
                </p>
            </div>
        </footer>
    );
}
