import { useScreenSize } from '@utilities/hooks/useScreenSize';
import { FC, useMemo } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error';
}

const variantClasses = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  accent: 'btn-accent',
  info: 'btn-info',
  success: 'btn-success',
  warning: 'btn-warning',
  error: 'btn-error',
};

export const Button: FC<ButtonProps> = ({ 
    variant = 'primary', 
    children, 
    className = '', 
    ...props 
}) => {

    const { isMobile } = useScreenSize();

    const variantClass = variantClasses[variant];
    const btnSmall = useMemo(()=> isMobile ? 'btn-sm' : '', [isMobile]);

    return (
        <button
            {...props}
            className={`btn ${variantClass} ${btnSmall} rounded-full ${className}`}
        >
            {children}
        </button>
    );
};
