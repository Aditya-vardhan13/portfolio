export default function Education() {
    return (
        <section id="education" className="section">
            <div className="container">
                <div className="education-grid" style={{ display: 'grid', gap: '4rem' }}>

                    {/* Education Column */}
                    <div>
                        <h2 className="section-title"><span>Ed</span>ucation</h2>
                        <div style={{
                            background: 'var(--surface)',
                            padding: '2rem',
                            borderRadius: '8px',
                            borderLeft: '4px solid var(--primary)'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-main)' }}>IIT Bhilai</h3>
                            <p style={{ color: 'var(--primary)', fontWeight: '600', marginTop: '0.5rem' }}>Bachelor of Technology in Electrical Engineering</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: 'var(--text-muted)' }}>
                                <span>2020 - 2024</span>
                                <span style={{ color: 'var(--accent)' }}>8.14 CGPA</span>
                            </div>
                        </div>
                    </div>

                    {/* Achievements Column */}
                    <div style={{ marginTop: '3rem' }}>
                        <h2 className="section-title"><span>Ac</span>hievements</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>🏆</span>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-main)' }}>AWS Gen AI JAM (Public Sector Hackathon)</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                                        3rd Place. Developed a multilingual AI tutor for government students.
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>🚀</span>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-main)' }}>NASA AMES Space Settlement Contest 2017</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                                        Selected among Top 100 Projects worldwide.
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                                <span style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>🧠</span>
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-main)' }}>Inter IIT Cultural Meet</h4>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.2rem' }}>
                                        Quiz contingent member at 2023 (IIT KGP) and 2022 (IITM).
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
