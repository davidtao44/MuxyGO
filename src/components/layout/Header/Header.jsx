import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
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
            setIsScrolled(window.scrollY > 20);
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
        <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
            <Container>
                <div className={styles.headerInner}>
                    {/* Logo */}
                    <Link to="/" className={styles.logo} aria-label="MuxyGo - Inicio">
                        <div className={styles.logoIcon}>M</div>
                        <span>MuxyGo</span>
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
                                Contáctanos
                            </Button>
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            className={`${styles.menuButton} ${isMobileMenuOpen ? styles.menuOpen : ''}`}
                            onClick={toggleMobileMenu}
                            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                            aria-expanded={isMobileMenuOpen}
                        >
                            <span className={styles.menuLine}></span>
                            <span className={styles.menuLine}></span>
                            <span className={styles.menuLine}></span>
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Navigation */}
            <nav
                className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}
                aria-label="Navegación móvil"
            >
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
            </nav>
        </header>
    );
}

export default Header;
