import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    ArrowRight, 
    CheckCircle, 
    Users, 
    TrendingUp, 
    Award,
    BarChart3
} from 'lucide-react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import styles from './Hero.module.css';

function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const statsData = [
        { value: "500+", label: "Proyectos Completados", icon: <CheckCircle size={20} /> },
        { value: "200+", label: "Clientes Satisfechos", icon: <Users size={20} /> },
        { value: "15+", label: "Años de Experiencia", icon: <Award size={20} /> },
        { value: "98%", label: "Tasa de Satisfacción", icon: <TrendingUp size={20} /> }
    ];

    return (
        <motion.section 
            className={styles.hero}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <Container>
                <div className={styles.content}>
                    {/* Text Content */}
                    <motion.div className={styles.textContent} variants={containerVariants}>
                        <motion.div 
                            className={styles.badge}
                            variants={itemVariants}
                        >
                            <CheckCircle size={16} className={styles.badgeIcon} />
                            Soluciones Tecnológicas Profesionales
                        </motion.div>

                        <motion.h1 className={styles.title} variants={itemVariants}>
                            Transformamos{' '}
                            <span className={styles.titleHighlight}>
                                tus Ideas
                            </span>{' '}
                            en Realidad Digital
                        </motion.h1>

                        <motion.p className={styles.subtitle} variants={itemVariants}>
                            Somos tu socio estratégico en la transformación digital. 
                            Creamos soluciones tecnológicas robustas y escalables que 
                            impulsan el crecimiento de tu negocio con excelencia profesional.
                        </motion.p>

                        <motion.div className={styles.buttons} variants={itemVariants}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link to="/contacto">
                                    <Button variant="primary" size="large">
                                        Iniciar Proyecto
                                    </Button>
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Link to="/servicios">
                                    <Button variant="outline" size="large">
                                        Ver Servicios
                                    </Button>
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Stats Section */}
                        <motion.div className={styles.stats} variants={itemVariants}>
                            {statsData.map((stat, index) => (
                                <motion.div 
                                    key={index} 
                                    className={styles.stat}
                                    variants={itemVariants}
                                    whileHover={{ 
                                        y: -2,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <div className={styles.statIcon}>{stat.icon}</div>
                                    <div className={styles.statValue}>{stat.value}</div>
                                    <div className={styles.statLabel}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Visual Side */}
                    <motion.div className={styles.visual} variants={itemVariants}>
                        <div className={styles.visualContent}>
                            <div className={styles.visualCard}>
                                <div className={styles.visualCardHeader}>
                                    <div className={styles.visualDots}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <div className={styles.visualCardBody}>
                                    <div className={styles.visualLines}>
                                        <div className={styles.line}></div>
                                        <div className={styles.line}></div>
                                        <div className={styles.line}></div>
                                         <div className={`${styles.line} ${styles.short}`}></div>
                                    </div>
                                </div>
                            </div>
                            <BarChart3 className={styles.chartIcon} size={120} />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </motion.section>
    );
}

export default Hero;