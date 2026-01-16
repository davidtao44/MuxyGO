import { useScrollAnimation } from '../../../hooks';
import { Star } from 'lucide-react';
import Container from '../../ui/Container';
import styles from './Testimonials.module.css';

const TESTIMONIALS = [
    {
        quote: 'MuxyGo transformó completamente nuestra presencia digital. Su equipo es profesional, innovador y entrega resultados excepcionales.',
        author: 'María García',
        role: 'CEO, TechStart',
        company: 'Tecnología',
        rating: 5,
    },
    {
        quote: 'La mejor decisión que tomamos fue confiar en MuxyGo para nuestro proyecto de transformación digital. Superaron todas nuestras expectativas.',
        author: 'Carlos López',
        role: 'Director IT, InnovateCorp',
        company: 'Consultoría',
        rating: 5,
    },
    {
        quote: 'Excelente servicio y atención al cliente. El equipo está siempre disponible y su comunicación es impecable.',
        author: 'Ana Martínez',
        role: 'Product Manager, DataFlow',
        company: 'Software',
        rating: 5,
    },
    {
        quote: 'Implementaron nuestra solución cloud con máxima eficiencia. Su conocimiento técnico es sobresaliente.',
        author: 'Roberto Silva',
        role: 'CTO, CloudNet',
        company: 'Infraestructura',
        rating: 5,
    },
    {
        quote: 'Desarrollo de apps móvil de primera calidad. Nuestros usuarios aman el nuevo producto.',
        author: 'Laura Fernández',
        role: 'Directora Digital, RetailPro',
        company: 'Retail',
        rating: 5,
    },
    {
        quote: 'Su enfoque en seguridad nos dio la confianza que necesitábamos para digitalizar nuestros procesos.',
        author: 'Diego Morales',
        role: 'CSO, SecureBank',
        company: 'Finanzas',
        rating: 5,
    },
];

function TestimonialCard({ quote, author, role, company, rating, index }) {
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

    return (
        <article
            ref={ref}
            className={`${styles.card} ${isVisible ? styles.visible : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className={styles.cardContent}>
                <div className={styles.stars}>
                    {Array.from({ length: rating }).map((_, i) => (
                        <Star key={i} size={16} className={styles.star} />
                    ))}
                </div>
                
                <blockquote className={styles.quote}>
                    "{quote}"
                </blockquote>

                <div className={styles.author}>
                    <div className={styles.authorInfo}>
                        <h4 className={styles.authorName}>{author}</h4>
                        <p className={styles.authorRole}>{role}</p>
                        <p className={styles.authorCompany}>{company}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}

function Testimonials() {
    const [headerRef, headerVisible] = useScrollAnimation({ threshold: 0.2 });

    return (
        <section className={styles.testimonials} id="testimonios">
            <Container>
                <header 
                    ref={headerRef}
                    className={`${styles.header} ${headerVisible ? styles.visible : ''}`}
                >
                    <h2 className={styles.title}>Testimonios de Clientes</h2>
                    <p className={styles.description}>
                        Descubre cómo hemos ayudado a empresas como la tuya a alcanzar sus objetivos digitales con soluciones innovadoras y eficientes.
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