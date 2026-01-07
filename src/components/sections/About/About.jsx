import { useScrollAnimation } from '../../../hooks';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const VALUES = [
    {
        icon: '🎯',
        title: 'Excelencia',
        description: 'Buscamos la perfección en cada proyecto.',
    },
    {
        icon: '🤝',
        title: 'Compromiso',
        description: 'Tu éxito es nuestra prioridad.',
    },
    {
        icon: '💡',
        title: 'Innovación',
        description: 'Adoptamos las últimas tecnologías.',
    },
    {
        icon: '🔄',
        title: 'Agilidad',
        description: 'Entregas rápidas y eficientes.',
    },
];

function About() {
    const [textRef, textVisible] = useScrollAnimation({ threshold: 0.2 });
    const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.2 });

    return (
        <section className={styles.about} id="nosotros">
            <div className={styles.backgroundAccent}></div>

            <Container>
                <div className={styles.content}>
                    {/* Image side */}
                    <div
                        ref={imageRef}
                        className={`${styles.imageWrapper} ${styles.animated} ${imageVisible ? styles.visible : ''}`}
                    >
                        <div className={styles.imagePlaceholder}>
                            👨‍💻
                        </div>
                        <div className={styles.imageOverlay}>
                            <div className={styles.overlayStats}>
                                <div className={styles.overlayStat}>
                                    <div className={styles.overlayValue}>98%</div>
                                    <div className={styles.overlayLabel}>Satisfacción</div>
                                </div>
                                <div className={styles.overlayStat}>
                                    <div className={styles.overlayValue}>24/7</div>
                                    <div className={styles.overlayLabel}>Soporte</div>
                                </div>
                                <div className={styles.overlayStat}>
                                    <div className={styles.overlayValue}>100%</div>
                                    <div className={styles.overlayLabel}>Entrega</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text side */}
                    <div
                        ref={textRef}
                        className={`${styles.textContent} ${styles.animated} ${textVisible ? styles.visible : ''}`}
                    >
                        <p className={styles.subtitle}>Sobre Nosotros</p>
                        <h2 className={styles.title}>
                            Impulsamos la Transformación Digital de tu Negocio
                        </h2>
                        <p className={styles.description}>
                            En MuxyGo, combinamos experiencia técnica con visión estratégica para
                            crear soluciones tecnológicas que generan valor real. Nuestro equipo
                            de expertos está comprometido con la excelencia y la innovación continua.
                        </p>

                        {/* Values */}
                        <div className={styles.values}>
                            {VALUES.map(({ icon, title, description }) => (
                                <div key={title} className={styles.value}>
                                    <div className={styles.valueIcon}>{icon}</div>
                                    <div className={styles.valueContent}>
                                        <h4>{title}</h4>
                                        <p>{description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link to="/nosotros">
                            <Button variant="primary">Conoce al Equipo</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default About;
