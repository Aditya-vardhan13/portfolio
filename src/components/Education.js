export default function Education() {
    return (
        <section id="education" className="section">
            <div className="container">
                <div className="education-grid" style={{ display: 'grid', gap: '1.25rem' }}>

                    {/* Education Column */}
                    <div>
                        <h2 className="section-title"><span>Ed</span>ucation</h2>
                        <div style={{
                            background: 'var(--surface)',
                            padding: '1rem',
                            borderRadius: '8px',
                            borderLeft: '3px solid var(--primary)'
                        }}>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)' }}>IIT Bhilai</h3>
                            <p style={{ color: 'var(--primary)', fontWeight: '600', marginTop: '0.15rem', fontSize: '0.85rem' }}>Bachelor of Technology in Electrical Engineering</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                                <span>2020 - 2024</span>
                                <span style={{ color: 'var(--accent)' }}>8.14 CGPA</span>
                            </div>
                        </div>
                    </div>

                    {/* Achievements Column */}
                    <div style={{ marginTop: '0.75rem' }}>
                        <h2 className="section-title"><span>Ac</span>hievements</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>

                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>🏆</span>
                                <div>
                                    <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>AWS Gen AI JAM</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.1rem' }}>
                                        3rd Place. Developed multilingual AI tutor.
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>🚀</span>
                                <div>
                                    <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>NASA AMES Contest 2017</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.1rem' }}>
                                        Top 100 Projects worldwide.
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>🧠</span>
                                <div>
                                    <h4 style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)' }}>Inter IIT Cultural Meet</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '0.1rem' }}>
                                        Quiz contingent member 2022-23.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
