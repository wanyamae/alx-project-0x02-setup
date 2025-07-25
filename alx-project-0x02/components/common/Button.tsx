import { type ButtonProps } from '@/interfaces';

const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-8 py-4 text-base',
    large: 'px-10 py-8 text-lg',
};

const shapeClasses = {
    'rounded-sm': 'rounded-sm',
    'rounded-md': 'rounded-md',
    'rounded-full': 'rounded-full',
};

const Button: React.FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>> =({
    size = 'medium',
    shape = 'rounded-md',
    children,
    className = '',
    ...props
}) => (
    <button
        className={`${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-600 text-white hover:bg-blue-700 focus:outline-none ${className}`}
        {...props}
    >
        {children}
    </button>
);

export default Button;