import { useState } from 'react';
import { useScrollAnimation } from '../../../hooks';
import { submitContactForm } from '../../../services/api';
import { 
    Mail, 
    User, 
    Building, 
    MessageSquare,
    Send,
    CheckCircle
} from 'lucide-react';
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

const SERVICES = [
    { value: 'web', label: 'Desarrollo Web' },
    { value: 'mobile', label: 'Apps Móviles' },
    { value: 'cloud', label: 'Cloud Solutions' },
    { value: 'security', label: 'Ciberseguridad' },
    { value: 'ai', label: 'IA & Machine Learning' },
    { value: 'bi', label: 'Business Intelligence' },
];

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

    const resetForm = () => {
        setIsSuccess(false);
        setFormData(INITIAL_FORM_STATE);
    };

    return (
        <section className={styles.contactForm} id="contacto">
            <Container size="medium">
                <header className={styles.header}>
                    <h2 className={styles.title}>¿Listo para Empezar tu Proyecto?</h2>
                    <p className={styles.description}>
                        Cuéntanos sobre tus necesidades y te contactaremos para discutir cómo podemos ayudarte a alcanzar tus objetivos.
                    </p>
                </header>

                <div
                    ref={ref}
                    className={`${styles.formWrapper} ${isVisible ? styles.visible : ''}`}
                >
                    {isSuccess ? (
                        <div className={styles.successMessage}>
                            <CheckCircle size={48} className={styles.successIcon} />
                            <h3 className={styles.successTitle}>¡Mensaje Enviado con Éxito!</h3>
                            <p className={styles.successText}>
                                Gracias por contactarnos. Nuestro equipo revisará tu mensaje y te responderá a la brevedad posible.
                            </p>
                            <Button variant="outline" size="medium" onClick={resetForm}>
                                Enviar Otro Mensaje
                            </Button>
                        </div>
                    ) : (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="name" className={styles.label}>
                                        <User size={16} className={styles.labelIcon} />
                                        Nombre Completo <span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="Juan Pérez"
                                        required
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="email" className={styles.label}>
                                        <Mail size={16} className={styles.labelIcon} />
                                        Email <span className={styles.required}>*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="juan@empresa.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.formRow}>
                                <div className={styles.formGroup}>
                                    <label htmlFor="company" className={styles.label}>
                                        <Building size={16} className={styles.labelIcon} />
                                        Empresa
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className={styles.input}
                                        placeholder="Mi Empresa S.A."
                                    />
                                </div>

                                <div className={styles.formGroup}>
                                    <label htmlFor="service" className={styles.label}>
                                        <Send size={16} className={styles.labelIcon} />
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
                                        {SERVICES.map(({ value, label }) => (
                                            <option key={value} value={value}>
                                                {label}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message" className={styles.label}>
                                    <MessageSquare size={16} className={styles.labelIcon} />
                                    Mensaje <span className={styles.required}>*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className={styles.textarea}
                                    placeholder="Describe los detalles de tu proyecto..."
                                    rows={6}
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
                                {isSubmitting ? 'Enviando Mensaje...' : 'Enviar Mensaje'}
                            </Button>
                        </form>
                    )}
                </div>
            </Container>
        </section>
    );
}

export default ContactForm;