import Header from '../Header';
import Footer from '../Footer';
import WhatsAppButton from '../../ui/WhatsAppButton/WhatsAppButton';
import styles from './Layout.module.css';

/**
 * Layout wrapper component that includes Header and Footer
 */
function Layout({ children }) {
    return (
        <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
                {children}
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default Layout;
