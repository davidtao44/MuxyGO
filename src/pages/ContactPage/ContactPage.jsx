import { useState } from 'react';
import { submitContactForm } from '../../services/api';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import pageStyles from '../Page.module.css';
import styles from './ContactPage.module.css';

const CONTACT_INFO = [
    {
        icon: '📧',
        title: 'Email',
        content: 'info@muxygo.com',
        link: 'mailto:info@muxygo.com',
    },
    {
        icon: '📱',
        title: 'Teléfono',
        content: '+1 (555) 123-4567',
        link: 'tel:+15551234567',
    },
    {
        icon: '📍',
        title: 'Dirección',
        content: 'Av. Tecnología 123, Ciudad Tech',
        link: null,
    },
    {
        icon: '🕐',
        title: 'Horario',
        content: 'Lunes a Viernes: 9:00 - 18:00',
        link: null,
    },
];

const INITIAL_FORM_STATE = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
};

function ContactPage() {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await submitContactForm(formData);
            setIsSuccess(true);
            setFormData(INITIAL_FORM_STATE);
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.contactPage}>
            {/* Page Header */}
            <section className={pageStyles.pageHeader}>
                <Container>
                    <div className={pageStyles.headerContent}>
                        <h1 className={pageStyles.pageTitle}>Contáctanos</h1>
                        <p className={pageStyles.pageSubtitle}>
                            Estamos listos para ayudarte a hacer realidad tu próximo proyecto.
                        </p>
                    </div>
                </Container>
            </section>

            {/* Contact Content */}
            <Container>
                <div className={styles.contactGrid}>
                    {/* Contact Info */}
                    <div className={styles.contactInfo}>
                        <div>
                            <h2 className={styles.infoTitle}>Hablemos</h2>
                            <p className={styles.infoDescription}>
                                Ya sea que tengas una pregunta sobre nuestros servicios, precios,
                                o cualquier otra cosa, nuestro equipo está listo para responder
                                todas tus preguntas.
                            </p>
                        </div>

                        <div className={styles.infoCards}>
                            {CONTACT_INFO.map(({ icon, title, content, link }) => (
                                <div key={title} className={styles.infoCard}>
                                    <div className={styles.infoIcon}>{icon}</div>
                                    <div className={styles.infoContent}>
                                        <h3>{title}</h3>
                                        {link ? (
                                            <p><a href={link}>{content}</a></p>
                                        ) : (
                                            <p>{content}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className={styles.mapPlaceholder}>
                            🗺️
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.formSide}>
                        <h2 className={styles.formTitle}>Envíanos un Mensaje</h2>
                        <p className={styles.formDescription}>
                            Completa el formulario y nos pondremos en contacto contigo pronto.
                        </p>

                        {isSuccess ? (
                            <div className={styles.successMessage}>
                                <div className={styles.successIcon}>✅</div>
                                <h3 className={styles.successTitle}>¡Mensaje Enviado!</h3>
                                <p className={styles.successText}>
                                    Gracias por contactarnos. Te responderemos en menos de 24 horas.
                                </p>
                            </div>
                        ) : (
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name" className={styles.label}>
                                            Nombre <span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="Tu nombre"
                                            required
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="email" className={styles.label}>
                                            Email <span className={styles.required}>*</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="tu@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="phone" className={styles.label}>
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>

                                    <div className={styles.formGroup}>
                                        <label htmlFor="company" className={styles.label}>
                                            Empresa
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className={styles.input}
                                            placeholder="Tu empresa"
                                        />
                                    </div>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="service" className={styles.label}>
                                        Servicio de Interés
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={styles.select}
                                    >
                                        <option value="">Selecciona un servicio</option>
                                        <option value="web">Desarrollo Web</option>
                                        <option value="mobile">Apps Móviles</option>
                                        <option value="cloud">Cloud Solutions</option>
                                        <option value="security">Ciberseguridad</option>
                                        <option value="ai">IA & Machine Learning</option>
                                        <option value="bi">Business Intelligence</option>
                                        <option value="other">Otro</option>
                                    </select>
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="message" className={styles.label}>
                                        Mensaje <span className={styles.required}>*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={styles.textarea}
                                        placeholder="Cuéntanos sobre tu proyecto, necesidades o cualquier consulta..."
                                        required
                                    ></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="large"
                                    fullWidth
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ContactPage;
