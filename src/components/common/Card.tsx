import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'md',
  rounded = 'xl'
}) => {
  const baseClasses = 'bg-white transition-shadow duration-300';
  
  const variantClasses = {
    default: 'shadow-lg border border-gray-200',
    outlined: 'border-2 border-gray-300',
    elevated: 'shadow-xl hover:shadow-2xl'
  };
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl'
  };

  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    roundedClasses[rounded],
    className
  ].join(' ');

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

export default Card;
