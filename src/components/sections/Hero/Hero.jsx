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
import HeroAnimation from './HeroAnimation';
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
                    </motion.div>
                    
                    {/* Animation Content */}
                    <div className={styles.animationWrapper}>
                        <HeroAnimation />
                    </div>
                </div>
            </Container>
        </motion.section>
    );
}

export default Hero;
