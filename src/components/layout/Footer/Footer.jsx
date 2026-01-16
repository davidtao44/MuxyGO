import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    Linkedin, 
    Twitter, 
    Github, 
    Mail, 
    Phone, 
    MapPin, 
    Building2
} from 'lucide-react';
import Container from '../../ui/Container';
import styles from './Footer.module.css';

const QUICK_LINKS = [
    { path: '/', label: 'Inicio' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/contacto', label: 'Contacto' },
];

const SERVICES = [
    { label: 'Desarrollo Web' },
    { label: 'Apps Móviles' },
    { label: 'Consultoría IT' },
    { label: 'Cloud Solutions' },
];

const SOCIAL_LINKS = [
    { 
        href: 'https://linkedin.com', 
        label: 'LinkedIn', 
        icon: <Linkedin size={20} />,
    },
    { 
        href: 'https://twitter.com', 
        label: 'Twitter', 
        icon: <Twitter size={20} />,
    },
    { 
        href: 'https://github.com', 
        label: 'GitHub', 
        icon: <Github size={20} />,
    },
];

function Footer() {
    const currentYear = new Date().getFullYear();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
        <motion.footer 
            className={styles.footer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <Container>
                <div className={styles.footerGrid}>
                    {/* Company Info */}
                    <motion.div className={styles.companyInfo} variants={itemVariants}>
                        <Link to="/" className={styles.logo}>
                            <Building2 size={32} className={styles.logoIcon} />
                            <span>MuxyGo</span>
                        </Link>
                        
                        <p className={styles.description}>
                            Transformamos ideas en soluciones tecnológicas robustas.
                            Tu socio estratégico para el crecimiento digital.
                        </p>
                        
                        <div className={styles.socialLinks}>
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div className={styles.footerColumn} variants={itemVariants}>
                        <h3 className={styles.columnTitle}>Enlaces Rápidos</h3>
                        <nav className={styles.linksContainer}>
                            {QUICK_LINKS.map(({ path, label }) => (
                                <Link key={path} to={path} className={styles.columnLink}>
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </motion.div>

                    {/* Services */}
                    <motion.div className={styles.footerColumn} variants={itemVariants}>
                        <h3 className={styles.columnTitle}>Servicios</h3>
                        <div className={styles.linksContainer}>
                            {SERVICES.map(({ label }) => (
                                <span key={label} className={styles.columnLink}>
                                    {label}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact */}
                    <motion.div className={styles.footerColumn} variants={itemVariants}>
                        <h3 className={styles.columnTitle}>Contacto</h3>
                        <div className={styles.contactContainer}>
                            {[
                                { 
                                    icon: <Mail size={18} />, 
                                    text: 'hola@muxygo.com'
                                },
                                { 
                                    icon: <Phone size={18} />, 
                                    text: '+1 (555) 123-4567'
                                },
                                { 
                                    icon: <MapPin size={18} />, 
                                    text: 'Innovation Hub, Tech City'
                                }
                            ].map((item, index) => (
                                <div key={index} className={styles.contactItem}>
                                    <div className={styles.contactIcon}>{item.icon}</div>
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div className={styles.bottomBar} variants={itemVariants}>
                    <p className={styles.copyright}>
                        © {currentYear} MuxyGo. Todos los derechos reservados.
                    </p>
                    <div className={styles.legalLinks}>
                        {['Política de Privacidad', 'Términos de Uso'].map((link) => (
                            <a key={link} href="#" className={styles.legalLink}>
                                {link}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </motion.footer>
    );
}

export default Footer;