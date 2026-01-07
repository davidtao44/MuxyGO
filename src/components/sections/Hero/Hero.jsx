import { Link } from 'react-router-dom';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import styles from './Hero.module.css';

function Hero() {
    return (
        <section className={styles.hero}>
            {/* Background effects */}
            <div className={styles.backgroundGlow}></div>
            <div className={styles.backgroundGlowSecondary}></div>
            <div className={styles.gridPattern}></div>

            <Container>
                <div className={styles.content}>
                    {/* Text content */}
                    <div className={styles.textContent}>
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span>
                            Innovación Tecnológica
                        </div>

                        <h1 className={styles.title}>
                            Transformamos{' '}
                            <span className={styles.titleHighlight}>Ideas</span> en{' '}
                            <span className={styles.titleHighlight}>Realidad Digital</span>
                        </h1>

                        <p className={styles.subtitle}>
                            Somos tu socio estratégico en la transformación digital.
                            Desarrollamos soluciones tecnológicas innovadoras que impulsan
                            el crecimiento de tu negocio.
                        </p>

                        <div className={styles.buttons}>
                            <Link to="/contacto">
                                <Button variant="primary" size="large">
                                    Empezar Proyecto
                                </Button>
                            </Link>
                            <Link to="/servicios">
                                <Button variant="outline" size="large">
                                    Ver Servicios
                                </Button>
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <div className={styles.statValue}>100+</div>
                                <div className={styles.statLabel}>Proyectos</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statValue}>50+</div>
                                <div className={styles.statLabel}>Clientes</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.statValue}>5+</div>
                                <div className={styles.statLabel}>Años</div>
                            </div>
                        </div>
                    </div>

                    {/* Visual */}
                    <div className={styles.visual}>
                        <div className={styles.visualInner}>
                            <span className={styles.visualIcon}>🚀</span>
                        </div>

                        {/* Floating cards */}
                        <div className={`${styles.floatingCard} ${styles.floatingCard1}`}>
                            ⚡ Desarrollo Ágil
                        </div>
                        <div className={`${styles.floatingCard} ${styles.floatingCard2}`}>
                            🔒 Seguridad
                        </div>
                        <div className={`${styles.floatingCard} ${styles.floatingCard3}`}>
                            📈 Escalabilidad
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Hero;
