import { Link } from 'react-router-dom';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import pageStyles from '../Page.module.css';
import styles from './ServicesPage.module.css';

const SERVICES_DETAIL = [
    {
        icon: '💬',
        title: 'Comunicaciones Automatizadas',
        description: 'Potenciamos tu comunicación con clientes y equipos mediante automatización inteligente de mensajería, notificaciones y respuestas que mejoran experiencia y eficiencia operativa.',
        image: '/ComunicacionesAutomatizadas.png',
        features: [
            'WhatsApp Business API Integration',
            'Agentes IA 24/7',
            'Automatización de Notificaciones',
            // 'Comunicación Omnicanal',
            'Respuestas Automáticas Personalizadas',
            // 'Segmentación de Audiencias',
            'Análisis de Interacciones',
            // 'Integración con CRM y Helpdesk',
        ],
    },
    {
        icon: '🔌',
        title: 'Integración de APIs y Sistemas',
        description: 'Conectamos todos tus sistemas y aplicaciones mediante arquitecturas de API robustas que aseguran flujo de datos consistente y automatización entre plataformas.',
        image: '/APIs.png',
        features: [
            'RESTful APIs',
            'Middleware Personalizado',
            'Sincronización de Datos en Tiempo Real',
            // 'ETL & Data Transformation',
            'API Gateway Management',
            // 'Microservices Architecture',
            'Webhooks & Event-Driven Integration',
            // 'Legacy System Modernization',
        ],
    },
    {
        icon: '🔧',
        title: 'MCPs y Conectores Personalizados',
        description: 'Implementamos el Model Context Protocol (MCP) para conectar tus modelos de IA con datos y herramientas empresariales de forma segura y estandarizada.',
        image: '/MCP.png',
        features: [
            'Desarrollo de Servidores MCP',
            'Integración de Fuentes de Datos',
            'Conectores para Herramientas Internas',
            // 'Context Awareness para LLMs',
            'Seguridad y Control de Acceso',
            'Estandarización de Protocolos',
            'Interoperabilidad entre Modelos',
            'Custom Integration Frameworks',
        ],
    },
    {
        icon: '💻',
        title: 'Desarrollo de Software a Medida',
        description: 'Creamos soluciones de software personalizadas que se integran perfectamente con tu ecosistema tecnológico existente, resolviendo problemas específicos de tu negocio.',
        image: '/Desarrolloweb.png',
        features: [
            'Aplicaciones Web Modernas',
            'Sistemas Empresariales a Medida',
            'Desarrollo de APIs Robustas',
            'Soluciones Cloud-Native',
            // 'Progressive Web Apps (PWA)',
            // 'Mobile Applications',
            // 'Enterprise Software Architecture',
            // 'DevOps & CI/CD Implementation',
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
                            Soluciones de automatización e inteligencia artificial para transformar radicalmente tu eficiencia operativa.
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
                    <h2 className={styles.ctaTitle}>¿Listo para Automatizar tu Éxito?</h2>
                    <p className={styles.ctaDescription}>
                        Contáctanos hoy y descubre cómo nuestras soluciones pueden transformar completamente tu operación.
                    </p>
                    <Link to="/contacto">
                        <Button variant="primary" size="large">
                            Iniciar Transformación Digital
                        </Button>
                    </Link>
                </Container>
            </section>
        </div>
    );
}

export default ServicesPage;
