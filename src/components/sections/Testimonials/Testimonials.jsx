import { useScrollAnimation } from '../../../hooks';
import Container from '../../ui/Container';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
    {
        quote: 'MuxyGo transformó completamente nuestra presencia digital. Su equipo es profesional, innovador y entrega resultados excepcionales.',
        author: 'María García',
        role: 'CEO, TechStart',
        avatar: 'M',
        rating: 5,
    },
    {
        quote: 'La mejor decisión que tomamos fue confiar en MuxyGo para nuestro proyecto de transformación digital. Superaron todas nuestras expectativas.',
        author: 'Carlos López',
        role: 'Director IT, InnovateCorp',
        avatar: 'C',
        rating: 5,
    },
    {
        quote: 'Excelente servicio y atención al cliente. El equipo está siempre disponible y su comunicación es impecable.',
        author: 'Ana Martínez',
        role: 'Product Manager, DataFlow',
        avatar: 'A',
        rating: 5,
    },
];

function TestimonialCard({ quote, author, role, avatar, rating, index }) {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

    return (
        <article
            ref={ref}
            className={`${styles.card} ${styles.animated} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <span className={styles.quoteIcon}>"</span>
            <p className={styles.quote}>{quote}</p>

            <div className={styles.author}>
                <div className={styles.avatar}>{avatar}</div>
                <div className={styles.authorInfo}>
                    <h4>{author}</h4>
                    <p>{role}</p>
                </div>
            </div>

            <div className={styles.stars}>
                {Array.from({ length: rating }).map((_, i) => (
                    <span key={i}>★</span>
                ))}
            </div>
        </article>
    );
}

function Testimonials() {
    return (
        <section className={styles.testimonials} id="testimonios">
            <Container>
                <header className={styles.header}>
                    <p className={styles.subtitle}>Testimonios</p>
                    <h2 className={styles.title}>Lo Que Dicen Nuestros Clientes</h2>
                    <p className={styles.description}>
                        La satisfacción de nuestros clientes es nuestra mejor carta de presentación.
                    </p>
                </header>

                <div className={styles.grid}>
                    {TESTIMONIALS.map((testimonial, index) => (
                        <TestimonialCard key={testimonial.author} {...testimonial} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    );
}

export default Testimonials;
