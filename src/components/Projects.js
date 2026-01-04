export default function Projects() {
    const projects = [
        {
            title: 'Distributed GNNs',
            subtitle: 'IIT Bhilai Research Intern',
            description: 'Worked on Distributed GNNs using DGL and PyTorch for scalability. Designed a decision tree-based partitioning algorithm that reduced entropy by 20% and improved accuracy by 5-10%.',
            tags: ['DGL', 'PyTorch', 'Research']
        },
        {
            title: 'Facial Emotion Recognition',
            subtitle: 'Computer Vision Model',
            description: 'Achieved 65% accuracy in classifying expressions using pre-trained MobileNetV2 with OpenCV and TensorFlow. Implemented real-time predictions from webcam data after extensive data cleaning and augmentation.',
            tags: ['OpenCV', 'TensorFlow', 'MobileNetV2']
        },
        {
            title: 'Recommendation System',
            subtitle: 'Streamlit Web App',
            description: 'Developed a multi-purpose Streamlit-based web app for top 10 recommendations based on user preferences. Utilized TF-IDF and count vectorization for products like movies, series, and books.',
            tags: ['Streamlit', 'TF-IDF', 'NLP']
        },
        {
            title: 'Crisis Impact Summarizer',
            subtitle: 'Automated NLP System',
            description: 'Designed an automated system for extracting and summarizing crisis-related information. Utilized CrisisFacts and PyTerrier for retrieval, with LLM-generated summaries.',
            tags: ['NLP', 'LLMs', 'PyTerrier']
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title"><span>Pr</span>ojects</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{project.title}</h3>
                            <p style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '0.9rem', fontWeight: '600' }}>{project.subtitle}</p>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                                {project.description}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.tags.map((tag, i) => (
                                    <span key={i} style={{
                                        background: 'rgba(78, 159, 61, 0.1)',
                                        color: 'var(--primary)',
                                        padding: '4px 12px',
                                        borderRadius: '50px',
                                        fontSize: '0.8rem',
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
