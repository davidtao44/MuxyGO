import { Link } from 'react-router-dom';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import pageStyles from '../Page.module.css';
import styles from './ServicesPage.module.css';

const SERVICES_DETAIL = [
    {
        icon: '💻', // Puede ser emoji o path de imagen importada
        title: 'Desarrollo Web',
        description: 'Creamos aplicaciones web modernas y escalables utilizando las últimas tecnologías del mercado. Desde landing pages hasta aplicaciones empresariales complejas.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', // Placeholder
        features: [
            'React & Next.js',
            'APIs RESTful & GraphQL',
            'Diseño Responsive',
            'SEO Optimizado',
            'Performance First',
            'Integración CI/CD',
        ],
    },
    {
        icon: '📱',
        title: 'Automatizaciones',
        description: 'Se implementan servicios de automatización para agilizar procesos y reducir costos.',
        image: '📲',
        features: [
            'React Native',
            'Flutter',
            'iOS Nativo (Swift)',
            'Android (Kotlin)',
            'Push Notifications',
            'Offline Support',
        ],
    },
    {
        icon: '☁️',
        title: 'Cloud Solutions',
        description: 'Implementamos y gestionamos infraestructuras en la nube que optimizan tus operaciones, reducen costos y escalan automáticamente.',
        image: '⛅',
        features: [
            'AWS & Azure & GCP',
            'Kubernetes & Docker',
            'Serverless Architecture',
            'Infrastructure as Code',
            'Auto Scaling',
            'Disaster Recovery',
        ],
    },
    {
        icon: '🔒',
        title: 'Ciberseguridad',
        description: 'Protegemos tu infraestructura digital con las mejores prácticas de seguridad, auditorías regulares y respuesta ante incidentes.',
        image: '🛡️',
        features: [
            'Auditorías de Seguridad',
            'Penetration Testing',
            'SOC 2 Compliance',
            'GDPR Compliance',
            'Security Training',
            'Incident Response',
        ],
    },
    {
        icon: '🤖',
        title: 'IA & Machine Learning',
        description: 'Integramos inteligencia artificial en tus procesos para automatizar tareas, obtener insights y mejorar la toma de decisiones.',
        image: '🧠',
        features: [
            'ChatBots Inteligentes',
            'Análisis Predictivo',
            'NLP & Procesamiento de Texto',
            'Computer Vision',
            'Recomendaciones ML',
            'Automatización RPA',
        ],
    },
    {
        icon: '📊',
        title: 'Business Intelligence',
        description: 'Transformamos tus datos en información accionable con dashboards interactivos, reportes automatizados y análisis avanzado.',
        image: '📈',
        features: [
            'Dashboards en Tiempo Real',
            'Data Warehousing',
            'ETL Pipelines',
            'Reportes Automatizados',
            'Data Visualization',
            'Predictive Analytics',
        ],
    },
];

function ServicesPage() {
    return (
        <div className={styles.servicesPage}>
            {/* Page Header */}
            <section className={pageStyles.pageHeader}>
                <Container>
                    <div className={pageStyles.headerContent}>
                        <h1 className={pageStyles.pageTitle}>Nuestros Servicios</h1>
                        <p className={pageStyles.pageSubtitle}>
                            Soluciones tecnológicas integrales diseñadas para impulsar tu transformación digital.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Services Detail */}
            <section className={styles.servicesSection}>
                <Container>
                    <div className={styles.servicesGrid}>
                        {SERVICES_DETAIL.map(({ icon, title, description, image, features }) => (
                            <article key={title} className={styles.serviceDetail}>
                                <div className={styles.serviceImage}>
                                    {image && image.length > 2 ? (
                                        <img src={image} alt={title} className={styles.responsiveImage} />
                                    ) : (
                                        image
                                    )}
                                </div>
                                <div className={styles.serviceContent}>
                                    <div className={styles.serviceIcon}>
                                        {icon && icon.length > 2 ? (
                                            <img src={icon} alt={title} className={styles.responsiveIcon} />
                                        ) : (
                                            icon
                                        )}
                                    </div>
                                    <h2 className={styles.serviceTitle}>{title}</h2>
                                    <p className={styles.serviceDescription}>{description}</p>
                                    <ul className={styles.featuresList}>
                                        {features.map((feature) => (
                                            <li key={feature} className={styles.featureItem}>
                                                <span className={styles.featureCheck}>✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </article>
                        ))}
                    </div>
                </Container>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <Container>
                    <h2 className={styles.ctaTitle}>¿Listo para Empezar tu Proyecto?</h2>
                    <p className={styles.ctaDescription}>
                        Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar tus objetivos tecnológicos.
                    </p>
                    <Link to="/contacto">
                        <Button variant="primary" size="large">
                            Solicitar Consulta Gratuita
                        </Button>
                    </Link>
                </Container>
            </section>
        </div>
    );
}

export default ServicesPage;
