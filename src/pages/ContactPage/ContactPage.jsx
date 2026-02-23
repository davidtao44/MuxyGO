import { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import pageStyles from '../Page.module.css';
import styles from './ContactPage.module.css';

const CONTACT_INFO = [
    {
        icon: <Mail size={24} />,
        title: 'Email',
        content: 'gerencia@muxygo.com',
        link: 'mailto:gerencia@muxygo.com',
    },
    {
        icon: <Phone size={24} />,
        title: 'Teléfono',
        content: '+57 314 258 5911',
        link: 'tel:+573142585911',
    },
    {
        icon: <MapPin size={24} />,
        title: 'Dirección',
        content: 'Sogamoso, Boyacá, Colombia',
        link: null,
    },
    {
        icon: <Clock size={24} />,
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
    // Usar variable de entorno o un string temporal que el usuario debe reemplazar
    const [state, handleSubmit] = useForm(import.meta.env.VITE_FORMSPREE_FORM_ID || "xeelpogw");
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);

    // Efecto para manejar el éxito del envío y limpiar el formulario
    useEffect(() => {
        if (state.succeeded) {
            setFormData(INITIAL_FORM_STATE);
        }
    }, [state.succeeded]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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

                        <div className={styles.mapWrapper}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31756.154437369062!2d-72.9360879645851!3d5.710204646700545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a416ad803099b%3A0xe53bc9d96850c905!2sSogamoso%2C%20Boyac%C3%A1!5e0!3m2!1ses!2sco!4v1705973400000!5m2!1ses!2sco"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="MuxyGO Location in Sogamoso"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className={styles.formSide}>
                        <h2 className={styles.formTitle}>Envíanos un Mensaje</h2>
                        <p className={styles.formDescription}>
                            Completa el formulario y nos pondremos en contacto contigo pronto.
                        </p>

                        {state.succeeded ? (
                            <div className={styles.successMessage}>
                                <CheckCircle size={64} className={styles.successIcon} color="#22c55e" />
                                <h3 className={styles.successTitle}>¡Mensaje Enviado!</h3>
                                <p className={styles.successText}>
                                    Gracias por contactarnos. Te responderemos lo más pronto posible.
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
                                        <ValidationError 
                                            prefix="Nombre" 
                                            field="name"
                                            errors={state.errors}
                                            className={styles.fieldError}
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
                                        <ValidationError 
                                            prefix="Email" 
                                            field="email"
                                            errors={state.errors}
                                            className={styles.fieldError}
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
                                        <ValidationError 
                                            prefix="Teléfono" 
                                            field="phone"
                                            errors={state.errors}
                                            className={styles.fieldError}
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
                                        <ValidationError 
                                            prefix="Empresa" 
                                            field="company"
                                            errors={state.errors}
                                            className={styles.fieldError}
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
                                        <option value="comunicaciones">Comunicaciones Automatizadas</option>
                                        <option value="integracion">Integración de APIs y Sistemas</option>
                                        <option value="mcp">MCPs y Conectores Personalizados</option>
                                        <option value="software">Desarrollo de Software a Medida</option>
                                    </select>
                                    <ValidationError 
                                        prefix="Servicio" 
                                        field="service"
                                        errors={state.errors}
                                        className={styles.fieldError}
                                    />
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
                                    <ValidationError 
                                        prefix="Mensaje" 
                                        field="message"
                                        errors={state.errors}
                                        className={styles.fieldError}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="large"
                                    fullWidth
                                    disabled={state.submitting}
                                >
                                    {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
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
