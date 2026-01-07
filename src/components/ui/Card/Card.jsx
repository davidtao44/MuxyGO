import styles from './Card.module.css';

/**
 * Card component with glassmorphism effect
 * @param {Object} props
 * @param {'default' | 'elevated' | 'outlined' | 'glass'} props.variant - Card style variant
 * @param {'compact' | 'default' | 'spacious'} props.padding - Padding size
 * @param {boolean} props.interactive - Whether card has hover effects
 * @param {React.ReactNode} props.icon - Optional icon element
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description
 * @param {React.ReactNode} props.children - Custom card content
 */
function Card({
    variant = 'default',
    padding = 'default',
    interactive = true,
    icon,
    title,
    description,
    children,
    className = '',
    ...props
}) {
    const classNames = [
        styles.card,
        variant !== 'default' && styles[variant],
        padding !== 'default' && styles[padding],
        interactive && styles.interactive,
        className
    ].filter(Boolean).join(' ');

    return (
        <article className={classNames} {...props}>
            {icon && <div className={styles.iconWrapper}>{icon}</div>}
            {title && <h3 className={styles.title}>{title}</h3>}
            {description && <p className={styles.description}>{description}</p>}
            {children}
        </article>
    );
}

export default Card;
