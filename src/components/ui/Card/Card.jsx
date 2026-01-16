import { motion } from 'framer-motion';
import styles from './Card.module.css';

/**
 * Enhanced Card component with creative variants and animations
 * @param {Object} props
 * @param {'default' | 'elevated' | 'outlined' | 'glass' | 'neon' | 'gradient'} props.variant - Card style variant
 * @param {'compact' | 'default' | 'spacious'} props.padding - Padding size
 * @param {boolean} props.interactive - Whether card has hover effects
 * @param {React.ReactNode} props.icon - Optional icon element
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description
 * @param {React.ReactNode} props.children - Custom card content
 * @param {string} props.gradient - Optional gradient for gradient variant
 */
function Card({
    variant = 'default',
    padding = 'default',
    interactive = true,
    icon,
    title,
    description,
    children,
    gradient,
    className = '',
    ...props
}) {
    const MotionCard = motion.article;
    
    const cardVariants = {
        initial: { 
            opacity: 0, 
            y: 20,
            scale: 1
        },
        hover: { 
            y: -5,
            scale: 1.02,
            transition: { 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
            }
        },
        tap: { 
            scale: 0.98,
            transition: { duration: 0.1 }
        }
    };

    const classNames = [
        styles.card,
        styles[variant],
        padding !== 'default' && styles[padding],
        interactive && styles.interactive,
        className
    ].filter(Boolean).join(' ');

    const cardStyle = gradient ? { background: gradient } : {};

    return (
        <MotionCard
            className={classNames}
            style={cardStyle}
            variants={cardVariants}
            initial="initial"
            whileHover={interactive ? "hover" : "initial"}
            whileTap={interactive ? "tap" : "initial"}
            {...props}
        >
            {icon && (
                <motion.div 
                    className={styles.iconWrapper}
                    whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                        transition: { type: "spring" }
                    }}
                >
                    {icon}
                </motion.div>
            )}
            {title && <h3 className={styles.title}>{title}</h3>}
            {description && <p className={styles.description}>{description}</p>}
            {children}
            
            {/* Animated border for neon variant */}
            {variant === 'neon' && (
                <div className={styles.neonBorder}></div>
            )}
        </MotionCard>
    );
}

export default Card;
