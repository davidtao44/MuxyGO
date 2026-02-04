import { Award, Users, Lightbulb, ShieldCheck, Target, Eye } from 'lucide-react';
import Container from '../../components/ui/Container';
import pageStyles from '../Page.module.css';
import styles from './AboutPage.module.css';

const VALUES = [
    {
        icon: <Award size={40} />,
        title: 'Excelencia',
        description: 'Buscamos la perfección en cada línea de código.',
    },
    {
        icon: <Users size={40} />,
        title: 'Colaboración',
        description: 'Trabajamos como un equipo unido con nuestros clientes.',
    },
    {
        icon: <Lightbulb size={40} />,
        title: 'Innovación',
        description: 'Exploramos constantemente nuevas tecnologías.',
    },
    {
        icon: <ShieldCheck size={40} />,
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

            {/* Mission & Vision Section */}
            <section className={styles.missionVisionSection}>
                <Container>
                    <div className={styles.missionVisionGrid}>
                        <article className={styles.mvCard}>
                            <div className={styles.mvIcon}>
                                <Target size={48} />
                            </div>
                            <h2 className={styles.mvTitle}>Misión</h2>
                            <p className={styles.mvDescription}>
                                Potenciar el crecimiento de las empresas mediante soluciones tecnológicas innovadoras, 
                                automatización inteligente e integración de sistemas, permitiéndoles alcanzar su máximo 
                                potencial operativo y estratégico en la era digital.
                            </p>
                        </article>
                        <article className={styles.mvCard}>
                            <div className={styles.mvIcon}>
                                <Eye size={48} />
                            </div>
                            <h2 className={styles.mvTitle}>Visión</h2>
                            <p className={styles.mvDescription}>
                                Ser el referente líder en transformación digital y automatización empresarial, 
                                reconocidos por nuestra capacidad de conectar tecnologías complejas en soluciones 
                                simples, escalables y de alto impacto para nuestros clientes.
                            </p>
                        </article>
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
        </div>
    );
}

export default AboutPage;
