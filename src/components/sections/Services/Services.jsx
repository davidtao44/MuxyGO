import { useScrollAnimation } from '../../../hooks';
import { 
    Code2, 
    Smartphone, 
    Cloud, 
    Shield, 
    Brain, 
    BarChart3 
} from 'lucide-react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import styles from './Services.module.css';

const SERVICES_DATA = [
    {
        icon: <Code2 size={24} />,
        title: 'Desarrollo Web',
        description: 'Creamos aplicaciones web modernas, rápidas y escalables utilizando las últimas tecnologías.',
        features: ['React & Next.js', 'APIs RESTful', 'Diseño Responsive'],
    },
    {
        icon: <Smartphone size={24} />,
        title: 'Apps Móviles',
        description: 'Desarrollamos aplicaciones móviles nativas e híbridas para iOS y Android.',
        features: ['React Native', 'Flutter', 'UX/UI Design'],
    },
    {
        icon: <Cloud size={24} />,
        title: 'Cloud Solutions',
        description: 'Implementamos soluciones en la nube que optimizan tus operaciones y reducen costos.',
        features: ['AWS & Azure', 'Kubernetes', 'DevOps'],
    },
    {
        icon: <Shield size={24} />,
        title: 'Ciberseguridad',
        description: 'Protegemos tu infraestructura y datos con las mejores prácticas de seguridad.',
        features: ['Auditorías', 'Pentesting', 'Compliance'],
    },
    {
        icon: <Brain size={24} />,
        title: 'IA & Machine Learning',
        description: 'Integramos inteligencia artificial para automatizar procesos y obtener insights.',
        features: ['ChatBots', 'Análisis Predictivo', 'NLP'],
    },
    {
        icon: <BarChart3 size={24} />,
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
            className={`${styles.serviceCard} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{icon}</div>
                <h3 className={styles.serviceTitle}>{title}</h3>
            </div>
            <p className={styles.serviceDescription}>{description}</p>
            <ul className={styles.features}>
                {features.map((feature) => (
                    <li key={feature} className={styles.feature}>
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
                    <h2 className={styles.title}>Nuestros Servicios</h2>
                    <p className={styles.description}>
                        Ofrecemos un portafolio completo de servicios diseñados para impulsar
                        la transformación digital de tu empresa con excelencia profesional.
                    </p>
                </header>

                <div className={styles.grid}>
                    {SERVICES_DATA.map((service, index) => (
                        <ServiceCard key={service.title} {...service} index={index} />
                    ))}
                </div>

                <div className={styles.cta}>
                    <h3 className={styles.ctaTitle}>
                        ¿Listo para transformar tu negocio?
                    </h3>
                    <p className={styles.ctaDescription}>
                        Hablemos de cómo podemos ayudarte a alcanzar tus objetivos digitales.
                    </p>
                    <Button variant="primary" size="large">
                        Consultar Servicio
                    </Button>
                </div>
            </Container>
        </section>
    );
}

export default Services;