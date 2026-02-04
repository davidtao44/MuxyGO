import { useScrollAnimation } from '../../../hooks';
import {
    MessageSquare,
    Database,
    Puzzle,
    Server,
    Globe,
    Code2,
    Settings,
    Link,
    Zap
} from 'lucide-react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import styles from './Services.module.css';

const SERVICES_DATA = [
    {
        icon: <MessageSquare size={24} />,
        title: 'Comunicaciones Automatizadas',
        description: 'Potenciamos tu comunicación con clientes y equipos mediante automatización de mensajería y notificaciones.',
        features: ['WhatsApp Business API', 'Notificaciones Automáticas', 'Sistemas de Mensajería', 'Comunicación Omnicanal'],
    },
    {
        icon: <Link size={24} />,
        title: 'Integración de APIs y Sistemas',
        description: 'Conectamos todos tus sistemas y aplicaciones mediante API robustas y sincronización de datos.',
        features: ['RESTful & GraphQL APIs', 'Middleware Personalizado', 'Sincronización de Datos', 'Transformación de Datos'],
    },
    {
        icon: <Globe size={24} />,
        title: 'MCPs y Conectores Personalizados',
        description: 'Implementamos el Model Context Protocol (MCP) para conectar tus modelos de IA con datos y herramientas empresariales.',
        features: ['Servidores MCP', 'Conectores para Herramientas', 'Context Awareness', 'Interoperabilidad IA'],
    },
    {
        icon: <Code2 size={24} />,
        title: 'Desarrollo de Software a Medida',
        description: 'Creamos soluciones de software personalizadas que se integran con tu ecosistema tecnológico.',
        features: ['Aplicaciones Web', 'Sistemas Empresariales', 'Desarrollo de APIs', 'Soluciones Cloud-Native'],
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
                        Soluciones integrales de automatización e inteligencia artificial para transformar 
                        tus procesos empresariales y acelerar tu crecimiento digital con máxima eficiencia.
                    </p>
                </header>

                <div className={styles.grid}>
                    {SERVICES_DATA.map((service, index) => (
                        <ServiceCard key={service.title} {...service} index={index} />
                    ))}
                </div>

                <div className={styles.cta}>
                    <h3 className={styles.ctaTitle}>
                        ¿Listo para automatizar tu crecimiento?
                    </h3>
                    <p className={styles.ctaDescription}>
                        Descubre cómo nuestras soluciones de automatización e IA pueden revolucionar tu operación.
                    </p>
                    <Button variant="primary" size="large">
                        Consultar Solución
                    </Button>
                </div>
            </Container>
        </section>
    );
}

export default Services;