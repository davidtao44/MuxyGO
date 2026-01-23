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
        title: 'Automatización de Procesos',
        description: 'Automatizamos procesos repetitivos y manuales para que puedas enfocarte en lo que realmente importa.',
        features: ['Automatización de procesos', 'Automatización de software', 'Automatización de procesos con WhatsApp'],
    },
    {
        icon: <Smartphone size={24} />,
        title: 'Desarrollo de Software',
        description: 'Desarrollamos software para que puedas enfocarte en lo que realmente importa.',
        features: ['Desarrollo de software', 'Desarrollo de aplicaciones web', 'React Native', 'FastAPI'],
    },
    {
        icon: <Cloud size={24} />,
        title: 'Automatización de WhatsApp',
        description: 'Automatizamos procesos repetitivos y manuales en whatsapp, para mejorar la comunicación con tus clientes y personal.',
        features: ['Automatización de WhatsApp', 'Automatización de WhatsApp Business', 'Automatización de WhatsApp con Python'],
    }
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