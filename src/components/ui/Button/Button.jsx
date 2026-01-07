import styles from './Button.module.css';

/**
 * Button component with multiple variants and sizes
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline' | 'ghost'} props.variant - Button style variant
 * @param {'small' | 'medium' | 'large'} props.size - Button size
 * @param {boolean} props.fullWidth - Whether button takes full width
 * @param {React.ReactNode} props.icon - Optional icon element
 * @param {React.ReactNode} props.children - Button content
 */
function Button({
    variant = 'primary',
    size = 'medium',
    fullWidth = false,
    icon,
    children,
    className = '',
    ...props
}) {
    const classNames = [
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        className
    ].filter(Boolean).join(' ');

    return (
        <button className={classNames} {...props}>
            {icon && <span className={styles.icon}>{icon}</span>}
            {children}
        </button>
    );
}

export default Button;
