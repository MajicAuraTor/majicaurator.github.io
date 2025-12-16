import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  titleSize?: 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
  gradient?: boolean;
  icon?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  description,
  className = '',
  titleSize = 'lg',
  centered = true,
  gradient = false,
  icon
}) => {
  const titleSizeClasses = {
    sm: 'text-2xl lg:text-3xl',
    md: 'text-3xl lg:text-4xl',
    lg: 'text-4xl lg:text-5xl',
    xl: 'text-5xl lg:text-6xl'
  };

  const titleClasses = [
    'font-bold mb-6',
    titleSizeClasses[titleSize],
    gradient 
      ? 'bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent'
      : 'text-gray-900'
  ].join(' ');

  const containerClasses = [
    'mb-16',
    centered ? 'text-center' : 'text-left',
    className
  ].join(' ');

  return (
    <div className={containerClasses}>
      {icon && (
        <div className={`mb-6 ${centered ? 'flex justify-center' : ''}`}>
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-3 rounded-lg text-white">
            {icon}
          </div>
        </div>
      )}
      
      <h1 className={titleClasses}>
        {title}
      </h1>
      
      {subtitle && (
        <h2 className="text-xl lg:text-2xl font-semibold text-blue-600 mb-4">
          {subtitle}
        </h2>
      )}
      
      {description && (
        <p className={`text-xl text-gray-600 ${centered ? 'max-w-3xl mx-auto' : 'max-w-4xl'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
