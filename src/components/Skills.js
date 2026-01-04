export default function Skills() {
    const skillCategories = [
        {
            title: 'Languages',
            skills: ['Python', 'SQL', 'Java']
        },
        {
            title: 'Frameworks & Tools',
            skills: ['Tensorflow', 'CUDA', 'AWS', 'Pytorch', 'Langchain', 'YOLO', 'Django', 'Git', 'Vector DBs', 'FastAPI', 'Streamlit', 'DGL', 'Selenium', 'Matlab']
        },
        {
            title: 'Libraries',
            skills: ['NumPy', 'Pandas', 'OpenCV', 'Beautiful Soup', 'Scikit-Learn', 'Matplotlib', 'Keras']
        }
    ];

    return (
        <section id="skills" className="section" style={{ background: 'var(--surface)' }}>
            <div className="container">
                <h2 className="section-title"><span>Sk</span>ills</h2>
                <div style={{ display: 'grid', gap: '1rem' }}>
                    {skillCategories.map((category, index) => (
                        <div key={index}>
                            <h3 style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '0.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.25rem' }}>
                                {category.title}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag" style={{ padding: '4px 10px', fontSize: '0.8rem' }}>
                                        {skill}
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
