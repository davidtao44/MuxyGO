/**
 * API Service
 * Prepared for future integrations with backend services
 */

import emailjs from '@emailjs/browser';

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/**
 * Generic fetch wrapper with error handling
 */
async function fetchApi(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint}`;

    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const response = await fetch(url, { ...defaultOptions, ...options });

    if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
}

/**
 * Contact form submission via EmailJS
 */
export async function submitContactForm(formData) {
    // Validate configuration
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
        console.warn('EmailJS not configured. Using fallback simulation.');
        console.log('Form Data:', formData);
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { success: true, message: 'Mensaje enviado (Simulación - Configurar EmailJS)' };
    }

    try {
        const templateParams = {
            to_name: 'MuxyGo Team',
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone || 'No especificado',
            company: formData.company || 'No especificada',
            service: formData.service || 'General',
            message: formData.message,
            reply_to: formData.email
        };

        const response = await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams,
            EMAILJS_PUBLIC_KEY
        );

        if (response.status === 200) {
            return { success: true, message: 'Mensaje enviado correctamente' };
        } else {
            throw new Error('Error al enviar el email');
        }
    } catch (error) {
        console.error('EmailJS Error:', error);
        throw new Error('No se pudo enviar el mensaje. Por favor intenta nuevamente.');
    }
}

/**
 * Newsletter subscription
 */
export async function subscribeNewsletter(email) {
    // TODO: Replace with actual API endpoint
    console.log('Newsletter subscription:', email);

    await new Promise(resolve => setTimeout(resolve, 500));

    return { success: true, message: 'Suscripción exitosa' };
}

export default {
    submitContactForm,
    subscribeNewsletter,
};
