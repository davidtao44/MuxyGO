import Container from '../../components/ui/Container';
import pageStyles from '../Page.module.css';
import styles from './AboutPage.module.css';

const TEAM_MEMBERS = [
    {
        name: 'Juan Pérez',
        role: 'CEO & Fundador',
        avatar: '👨‍💼',
        bio: 'Más de 15 años de experiencia en tecnología y liderazgo empresarial.',
    },
    {
        name: 'María García',
        role: 'CTO',
        avatar: '👩‍💻',
        bio: 'Experta en arquitectura de software y soluciones cloud.',
    },
    {
        name: 'Carlos López',
        role: 'Director de Producto',
        avatar: '👨‍🎨',
        bio: 'Especialista en UX/UI y desarrollo de productos digitales.',
    },
    {
        name: 'Ana Martínez',
        role: 'Directora de Operaciones',
        avatar: '👩‍💼',
        bio: 'Enfocada en optimización de procesos y excelencia operacional.',
    },
];

const TIMELINE = [
    {
        year: '2019',
        title: 'Fundación',
        description: 'MuxyGo nace con la visión de transformar la industria tecnológica.',
    },
    {
        year: '2020',
        title: 'Primeros Clientes Enterprise',
        description: 'Comenzamos a trabajar con empresas Fortune 500.',
    },
    {
        year: '2021',
        title: 'Expansión del Equipo',
        description: 'Crecemos a más de 50 profesionales especializados.',
    },
    {
        year: '2022',
        title: 'Reconocimiento Internacional',
        description: 'Premiados como mejor startup tecnológica del año.',
    },
    {
        year: '2023',
        title: 'Nuevos Servicios',
        description: 'Lanzamiento de servicios de IA y Machine Learning.',
    },
];

const VALUES = [
    {
        icon: '🎯',
        title: 'Excelencia',
        description: 'Buscamos la perfección en cada línea de código.',
    },
    {
        icon: '🤝',
        title: 'Colaboración',
        description: 'Trabajamos como un equipo unido con nuestros clientes.',
    },
    {
        icon: '💡',
        title: 'Innovación',
        description: 'Exploramos constantemente nuevas tecnologías.',
    },
    {
        icon: '🔒',
        title: 'Integridad',
        description: 'Actuamos con honestidad y transparencia.',
    },
];

function AboutPage() {
    return (
        <div className={styles.aboutPage}>
            {/* Page Header */}
            <section className={pageStyles.pageHeader}>
                <Container>
                    <div className={pageStyles.headerContent}>
                        <h1 className={pageStyles.pageTitle}>Sobre Nosotros</h1>
                        <p className={pageStyles.pageSubtitle}>
                            Conoce al equipo detrás de las soluciones tecnológicas que están transformando empresas.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Our Values */}
            <section className={styles.valuesSection}>
                <Container>
                    <h2 className={styles.sectionTitle}>Nuestros Valores</h2>
                    <div className={styles.valuesGrid}>
                        {VALUES.map(({ icon, title, description }) => (
                            <article key={title} className={styles.valueCard}>
                                <div className={styles.valueIcon}>{icon}</div>
                                <h3 className={styles.valueTitle}>{title}</h3>
                                <p className={styles.valueDescription}>{description}</p>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Team Section */}
            <section className={styles.teamSection}>
                <Container>
                    <h2 className={styles.sectionTitle}>Nuestro Equipo</h2>
                    <div className={styles.teamGrid}>
                        {TEAM_MEMBERS.map(({ name, role, avatar, bio }) => (
                            <article key={name} className={styles.teamCard}>
                                <div className={styles.teamAvatar}>{avatar}</div>
                                <h3 className={styles.teamName}>{name}</h3>
                                <p className={styles.teamRole}>{role}</p>
                                <p className={styles.teamBio}>{bio}</p>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Timeline Section */}
            <section className={styles.timelineSection}>
                <Container>
                    <h2 className={styles.sectionTitle}>Nuestra Historia</h2>
                    <div className={styles.timeline}>
                        {TIMELINE.map(({ year, title, description }) => (
                            <div key={year} className={styles.timelineItem}>
                                <div className={styles.timelineDot}></div>
                                <div className={styles.timelineContent}>
                                    <span className={styles.timelineYear}>{year}</span>
                                    <h3 className={styles.timelineTitle}>{title}</h3>
                                    <p className={styles.timelineDescription}>{description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </div>
    );
}

export default AboutPage;
