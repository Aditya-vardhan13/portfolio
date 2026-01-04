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
                <div style={{ display: 'grid', gap: '2rem' }}>
                    {skillCategories.map((category, index) => (
                        <div key={index}>
                            <h3 style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
                                {category.title}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag">
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
