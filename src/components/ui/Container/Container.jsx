import styles from './Container.module.css';

/**
 * Container component for consistent max-width and padding
 * @param {Object} props
 * @param {'small' | 'medium' | 'large' | 'full'} props.size - Container max-width
 * @param {React.ReactNode} props.children - Container content
 */
function Container({
    size = 'large',
    children,
    className = '',
    ...props
}) {
    const classNames = [
        styles.container,
        size !== 'large' && styles[size],
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classNames} {...props}>
            {children}
        </div>
    );
}

export default Container;
