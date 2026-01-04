export default function Experience() {
    const experiences = [
        {
            company: 'Centilytics',
            role: 'Sr Data Scientist',
            period: 'May 2024 - Present',
            points: [
                'Developed an AI-driven work allocation bot that classifies tickets by urgency and skill required, matching them to engineers; improved completion time by 15% and reduced expenses by 5%.',
                'Engineered a transcription API using Whisper, LangChain, and FFmpeg with a FastAPI-based RAG pipeline on AWS EC2; automated MOM and action items, reducing manual effort by 90%.',
                'Automated quarterly performance review scheduling by parallelizing meetings, reducing total time by 32% and room usage by 60%.',
                'Led research on fine-tuned SLMs vs. LLMs for SQL and Python in collaboration with CEO and CTO.'
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
            company: 'Zealth-AI (YC 20)',
            role: 'Data Science Intern',
            period: 'Feb 2023',
            points: [
                'Optimized CareShare, a Davinci-based healthcare chatbot, to assist users with daily health queries.',
                'Developed a drop-down feature in CareShare that accurately predicts skin diseases based on symptom images (rashes, bumps) using Zero Shot Learning. Increased daily user engagement by 1.5X.'
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
