export default function Navbar() {
    const links = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            background: 'rgba(15, 17, 21, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid var(--border)',
            zIndex: 100,
            padding: '1rem 0'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontSize: '1.25rem', fontWeight: '800', flexShrink: 0 }}>
                    <span style={{ color: 'var(--primary)', border: '2px solid var(--primary)', padding: '0 4px', marginRight: '2px' }}>Ad</span>itya
                </a>
                <div style={{
                    display: 'flex',
                    gap: '2rem',
                    overflowX: 'auto',
                    marginLeft: '2rem',
                    paddingBottom: '4px', /* For scrollbar space if needed */
                    scrollbarWidth: 'none', /* Firefox */
                    msOverflowStyle: 'none'  /* IE 10+ */
                }} className="nav-links-container">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}
