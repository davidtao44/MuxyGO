import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './HeroAnimation.module.css';

const LOGOS = [
    '/7x24h.svg',
    '/api.svg',
    '/dev.svg',
    '/mobile.svg',
    '/position.svg'
];

export default function HeroAnimation() {
    const containerRef = useRef(null);
    const logosRef = useRef([]);
    const circleRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Initial state
        gsap.set(logosRef.current, { 
            opacity: 0, 
            scale: 0,
        });
        
        gsap.set(circleRef.current, {
            scale: 0,
            opacity: 0
        });

        // Circle entrance
        tl.to(circleRef.current, {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "elastic.out(1, 0.5)"
        });

        // Staggered entrance for logos
        tl.to(logosRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)"
        }, "-=0.5");

        // Continuous Floating animation
        logosRef.current.forEach((logo, i) => {
            // Vertical float
            gsap.to(logo, {
                y: -15,
                duration: 1.5 + (i * 0.2),
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                delay: i * 0.1
            });

            // Gentle rotation
            gsap.to(logo, {
                rotation: i % 2 === 0 ? 5 : -5,
                duration: 2 + (i * 0.3),
                yoyo: true,
                repeat: -1,
                ease: "sine.inOut",
                delay: i * 0.2
            });
        });

        // Pulse effect for background
        gsap.to(circleRef.current, {
            scale: 1.05,
            opacity: 0.8,
            duration: 3,
            yoyo: true,
            repeat: -1,
            ease: "sine.inOut"
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className={styles.animationContainer}>
            <div ref={circleRef} className={styles.circleBackground}></div>
            {LOGOS.map((src, index) => (
                <div 
                    key={src} 
                    ref={el => logosRef.current[index] = el}
                    className={`${styles.logoWrapper} ${styles[`logo${index + 1}`]}`}
                >
                    <img src={src} alt="Technology Logo" className={styles.logo} />
                </div>
            ))}
        </div>
    );
}
