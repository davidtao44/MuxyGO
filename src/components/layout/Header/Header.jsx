import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import styles from './Header.module.css';

const NAV_LINKS = [
    { path: '/', label: 'Inicio' },
    { path: '/servicios', label: 'Servicios' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/contacto', label: 'Contacto' },
];

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.header
            className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            <Container>
                <div className={styles.headerInner}>
                    {/* Logo */}
                    <Link to="/" className={styles.logo} aria-label="MuxyGo - Inicio">
                        <img src="/logo.png" alt="MuxyGo" className={styles.logoImage} />
                        <span className={styles.logoText}>MuxyGo</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className={styles.nav} aria-label="Navegación principal">
                        {NAV_LINKS.map(({ path, label }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className={styles.actions}>
                        <Link to="/contacto">
                            <Button variant="primary" size="small">
                                Contactar
                            </Button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className={`${styles.menuButton} ${isMobileMenuOpen ? styles.menuOpen : ''}`}
                            onClick={toggleMobileMenu}
                            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                            aria-expanded={isMobileMenuOpen}
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={24} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={24} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.nav
                        className={styles.mobileNav}
                        aria-label="Navegación móvil"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={styles.mobileNavContent}>
                            {NAV_LINKS.map(({ path, label }) => (
                                <NavLink
                                    key={path}
                                    to={path}
                                    className={({ isActive }) =>
                                        `${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`
                                    }
                                    onClick={closeMobileMenu}
                                >
                                    {label}
                                </NavLink>
                            ))}
                            <div className={styles.mobileActions}>
                                <Link to="/contacto" onClick={closeMobileMenu}>
                                    <Button variant="primary" size="medium" fullWidth>
                                        Contactar
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.header>
    );
}

export default Header;