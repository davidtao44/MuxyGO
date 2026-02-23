/**
 * API Service
 * Prepared for future integrations with backend services
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

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
 * Newsletter subscription
 */
export async function subscribeNewsletter(email) {
    // TODO: Replace with actual API endpoint
    console.log('Newsletter subscription:', email);

    await new Promise(resolve => setTimeout(resolve, 500));

    return { success: true, message: 'Suscripción exitosa' };
}

export default {
    subscribeNewsletter,
};
