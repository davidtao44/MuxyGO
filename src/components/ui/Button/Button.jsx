import { motion } from 'framer-motion';
import styles from './Button.module.css';

/**
 * Enhanced Button component with creative variants and animations
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline' | 'ghost' | 'subtle'} props.variant - Button style variant
 * @param {'small' | 'medium' | 'large'} props.size - Button size
 * @param {boolean} props.fullWidth - Whether button takes full width
 * @param {React.ReactNode} props.icon - Optional icon element
 * @param {React.ReactNode} props.children - Button content
 * @param {boolean} props.disabled - Whether button is disabled
 */
function Button({
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    icon,
    children,
    disabled = false,
    className = '',
    ...props
}) {
    const MotionButton = motion.button;
    
    const buttonVariants = {
        initial: { scale: 1 },
        hover: { scale: 1.05 },
        tap: { scale: 0.98 },
        disabled: { scale: 1 }
    };

    const classNames = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        className
    ].filter(Boolean).join(' ');

    return (
        <MotionButton
            className={classNames}
            variants={buttonVariants}
            initial="initial"
            whileHover={!disabled ? "hover" : "disabled"}
            whileTap={!disabled ? "tap" : "disabled"}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            disabled={disabled}
            {...props}
        >
            {icon && <span className={styles.icon}>{icon}</span>}
            <span className={styles.buttonText}>{children}</span>
            {variant === 'neon' && (
                <div className={styles.neonOverlay}></div>
            )}
        </MotionButton>
    );
}

export default Button;
