import { useState } from 'react';
import { useScrollAnimation } from '../../../hooks';
import { submitContactForm } from '../../../services/api';
import Container from '../../ui/Container';
import Button from '../../ui/Button';
import styles from './ContactForm.module.css';

const INITIAL_FORM_STATE = {
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
};

function ContactForm() {
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 });

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
        <section className={styles.contactForm} id="contacto">
            <div className={styles.backgroundGlow}></div>

            <Container size="medium">
                <header className={styles.header}>
                    <p className={styles.subtitle}>Contacto</p>
                    <h2 className={styles.title}>¿Listo para Empezar?</h2>
                    <p className={styles.description}>
                        Cuéntanos sobre tu proyecto y te contactaremos para discutir cómo podemos ayudarte.
                    </p>
                </header>

                <div
                    ref={ref}
                    className={`${styles.formWrapper} ${styles.animated} ${isVisible ? styles.visible : ''}`}
                >
                    {isSuccess ? (
                        <div className={styles.successMessage}>
                            <div className={styles.successIcon}>✅</div>
                            <h3 className={styles.successTitle}>¡Mensaje Enviado!</h3>
                            <p className={styles.successText}>
                                Gracias por contactarnos. Te responderemos pronto.
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
                                    </select>
                                </div>
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
                                    placeholder="Cuéntanos sobre tu proyecto..."
                                    required
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                size="large"
                                fullWidth
                                disabled={isSubmitting}
                                className={styles.submitButton}
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                            </Button>
                        </form>
                    )}
                </div>
            </Container>
        </section>
    );
}

export default ContactForm;
