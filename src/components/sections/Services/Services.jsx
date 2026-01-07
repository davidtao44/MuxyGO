import { useScrollAnimation } from '../../../hooks';
import Container from '../../ui/Container';
import styles from './Services.module.css';

const SERVICES_DATA = [
    {
        icon: '💻',
        title: 'Desarrollo Web',
        description: 'Creamos aplicaciones web modernas, rápidas y escalables utilizando las últimas tecnologías.',
        features: ['React & Next.js', 'APIs RESTful', 'Diseño Responsive'],
    },
    {
        icon: '📱',
        title: 'Apps Móviles',
        description: 'Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android.',
        features: ['React Native', 'Flutter', 'UX/UI Design'],
    },
    {
        icon: '☁️',
        title: 'Cloud Solutions',
        description: 'Implementamos soluciones en la nube que optimizan tus operaciones y reducen costos.',
        features: ['AWS & Azure', 'Kubernetes', 'DevOps'],
    },
    {
        icon: '🔒',
        title: 'Ciberseguridad',
        description: 'Protegemos tu infraestructura y datos con las mejores prácticas de seguridad.',
        features: ['Auditorías', 'Pentesting', 'Compliance'],
    },
    {
        icon: '🤖',
        title: 'IA & Machine Learning',
        description: 'Integramos inteligencia artificial para automatizar procesos y obtener insights.',
        features: ['ChatBots', 'Análisis Predictivo', 'NLP'],
    },
    {
        icon: '📊',
        title: 'Business Intelligence',
        description: 'Transformamos tus datos en información accionable para tomar mejores decisiones.',
        features: ['Dashboards', 'Data Analytics', 'Reportes'],
    },
];

function ServiceCard({ icon, title, description, features, index }) {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

    return (
        <article
            ref={ref}
            className={`${styles.serviceCard} ${styles.animated} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className={styles.iconWrapper}>{icon}</div>
            <h3 className={styles.serviceTitle}>{title}</h3>
            <p className={styles.serviceDescription}>{description}</p>
            <ul className={styles.features}>
                {features.map((feature) => (
                    <li key={feature} className={styles.feature}>
                        <span className={styles.featureIcon}>✓</span>
                        {feature}
                    </li>
                ))}
            </ul>
        </article>
    );
}

function Services() {
    return (
        <section className={styles.services} id="servicios">
            <Container>
                <header className={styles.header}>
                    <p className={styles.subtitle}>Nuestros Servicios</p>
                    <h2 className={styles.title}>Soluciones Tecnológicas Integrales</h2>
                    <p className={styles.description}>
                        Ofrecemos un portafolio completo de servicios diseñados para impulsar
                        la transformación digital de tu empresa.
                    </p>
                </header>

                <div className={styles.grid}>
                    {SERVICES_DATA.map((service, index) => (
                        <ServiceCard key={service.title} {...service} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Services;
