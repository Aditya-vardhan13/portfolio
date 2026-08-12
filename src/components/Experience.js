export default function Experience() {
    const experiences = [
        {
            company: 'Teradata',
            role: 'AI Software Engineer II',
            period: 'Jan 2026 - Present',
            points: [
                'Implemented the Enterprise MCP Management engine using Kubernetes reconciliation, reducing deployment and operational failures by 40% and ensuring reliable deployment, stop, and deletion workflows.',
                'Designed multi-tenant database routing for MCP servers, reducing infrastructure overhead by 25% by enabling a single deployment to securely serve multiple Teradata environments and accelerating enterprise-scale adoption.',
                'Developed endpoint management APIs with RBAC and tool-level authorization controls, reducing administrative effort by 60% while strengthening governance and secure AI-agent access to enterprise data.',
                'Built a comprehensive integration testing and resiliency framework, reducing release validation effort by 90%, eliminating critical deployment issues, and serving as the release gate across 4 public MCP releases.'
            ]
        },
        {
            company: 'Zarthi',
            role: 'Senior Data Scientist',
            period: 'May 2024 - Jan 2026',
            points: [
                'Built a RAG-powered chatbot and recommendation platform enabling users to discover and navigate enterprise service offerings through natural language interactions.',
                'Architected a meeting intelligence platform using Whisper, LangChain, FastAPI, and AWS that automated transcripts, MOM generation, action items, and semantic search, reducing manual effort by 90%.',
                'Developed an AI-driven ticket allocation engine matching work based on urgency, skill requirements, and engineer availability, improving resolution time by 15% and reducing workforce costs by 5%.'
            ]
        },
        {
            company: 'IIT Bhilai',
            role: 'Research Intern',
            period: 'March 2024 - April 2024',
            points: [
                'Worked on assessing post-disaster damage using YOLO on aerial and satellite imagery under Dr. Soumajit Pramanik for quickly calculating loss and repairs.',
                'Worked on predicting the shift of flood water to alert the government beforehand to take necessary precautions.'
            ]
        },
        {
            company: '169Pi',
            role: 'Data Science Intern',
            period: 'March 2024 - May 2024',
            points: [
                'Developed a web scraping pipeline using Tavily AI and FAISS for embedding storage, exposing a REST API for LLM interaction.',
                'Created a Slackbot using Slack API to assist users with channel summaries and reports.'
            ]
        },
        {
            company: 'Nioclass',
            role: 'AI & Data Science Intern',
            period: 'May 2023 - July 2023',
            points: [
                'Built an AI system using GPT-4 to generate structured math solutions, decreasing question bank generation time by 10X.',
                'Designed an algorithm for ideal JEE question sequencing, increasing user activity by 2.4X.'
            ]
        },
        {
            company: 'Zealth-AI (YC W21)',
            role: 'Data Science Intern',
            period: 'Feb 2023',
            points: [
                'Developed a skin-condition prediction feature for CareShare, a healthcare chatbot, using Zero-Shot Learning on symptom images, increasing daily user engagement by 1.5x.'
            ]
        }
    ];

    return (
        <section id="experience" className="section" style={{ background: 'var(--surface)' }}>
            <div className="container">
                <h2 className="section-title"><span>Ex</span>perience</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {experiences.map((exp, index) => (
                        <div key={index} style={{
                            borderLeft: '3px solid var(--primary)',
                            paddingLeft: '1rem',
                            position: 'relative',
                            marginBottom: '0.5rem'
                        }}>
                            <div style={{
                                position: 'absolute',
                                left: '-9px',
                                top: '4px',
                                width: '14px',
                                height: '14px',
                                background: 'var(--background)',
                                border: '3px solid var(--primary)',
                                borderRadius: '50%'
                            }}></div>

                            <div style={{ marginBottom: '0.25rem' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)' }}>{exp.company}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0', flexWrap: 'wrap', gap: '0.25rem' }}>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '600' }}>{exp.role}</span>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{exp.period}</span>
                                </div>
                            </div>

                            <ul style={{ listStyle: 'none', color: 'var(--text-muted)', lineHeight: '1.4', fontSize: '0.85rem' }}>
                                {exp.points.map((point, i) => (
                                    <li key={i} style={{ marginBottom: '0.15rem', position: 'relative', paddingLeft: '1rem' }}>
                                        <span style={{ position: 'absolute', left: '0', color: 'var(--accent)' }}>▹</span>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
