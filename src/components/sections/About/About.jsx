import { useScrollAnimation } from '../../../hooks';
import { 
    Target, 
    Users, 
    Lightbulb, 
    Zap,
    Award,
    TrendingUp
} from 'lucide-react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import { Link } from 'react-router-dom';
import styles from './About.module.css';

const VALUES = [
    {
        icon: <Target size={24} />,
        title: 'Excelencia',
        description: 'Buscamos la perfección en cada proyecto.',
    },
    {
        icon: <Users size={24} />,
        title: 'Compromiso',
        description: 'Tu éxito es nuestra prioridad.',
    },
    {
        icon: <Lightbulb size={24} />,
        title: 'Innovación',
        description: 'Adoptamos las últimas tecnologías.',
    },
    {
        icon: <Zap size={24} />,
        title: 'Agilidad',
        description: 'Entregas rápidas y eficientes.',
    },
];

const STATS = [
    { value: '15+', label: 'Años de Experiencia', icon: <Award size={20} /> },
    { value: '500+', label: 'Proyectos Completados', icon: <Target size={20} /> },
    { value: '200+', label: 'Clientes Satisfechos', icon: <Users size={20} /> },
    { value: '98%', label: 'Tasa de Éxito', icon: <TrendingUp size={20} /> },
];

function About() {
    const [textRef, textVisible] = useScrollAnimation({ threshold: 0.2 });
    const [statsRef, statsVisible] = useScrollAnimation({ threshold: 0.2 });

    return (
        <section className={styles.about} id="nosotros">
            <Container>
                <div className={styles.content}>
                    {/* Text side */}
                    <div
                        ref={textRef}
                        className={`${styles.textContent} ${textVisible ? styles.visible : ''}`}
                    >
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

                    {/* Stats side */}
                    <div
                        ref={statsRef}
                        className={`${styles.statsContent} ${statsVisible ? styles.visible : ''}`}
                    >
                        <div className={styles.statsGrid}>
                            {STATS.map(({ value, label, icon }) => (
                                <div key={label} className={styles.stat}>
                                    <div className={styles.statIcon}>{icon}</div>
                                    <div className={styles.statValue}>{value}</div>
                                    <div className={styles.statLabel}>{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default About;