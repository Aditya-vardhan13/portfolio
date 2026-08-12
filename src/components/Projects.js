export default function Projects() {
    const projects = [
        {
            title: 'Distributed GNN Partitioning',
            subtitle: 'IIT Bhilai Research Project',
            description: 'Worked on Distributed GNNs using DGL and PyTorch for scalability. Designed a decision tree-based partitioning algorithm that reduced entropy by 20% and improved accuracy by 5-10%.',
            tags: ['DGL', 'PyTorch', 'Research']
        },
        {
            title: 'Crisis Impact Summarizer',
            subtitle: 'Crisis Intelligence System',
            description: 'Built an NLP-based crisis intelligence system using PyTerrier, CrisisFacts, and open-source LLMs for retrieval and summarization.',
            tags: ['PyTerrier', 'CrisisFacts', 'Open-source LLMs']
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title"><span>Pr</span>ojects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.75rem' }}>
                    {projects.map((project, index) => (
                        <div key={index} className="project-card" style={{ padding: '0.85rem' }}>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.15rem', color: 'var(--text-main)' }}>{project.title}</h3>
                            <p style={{ color: 'var(--primary)', marginBottom: '0.4rem', fontSize: '0.85rem', fontWeight: '600' }}>{project.subtitle}</p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.4', marginBottom: '0.6rem', fontSize: '0.85rem' }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} style={{
                                        background: 'rgba(78, 159, 61, 0.1)',
                                        color: 'var(--primary)',
                                        padding: '1px 8px',
                                        borderRadius: '50px',
                                        fontSize: '0.7rem',
                                        fontWeight: '500'
                                    }}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
