import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  loading = false,
  ...props
}) => {
  const baseClasses = 'btn font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';

  const variants = {
    primary: 'btn-primary focus:ring-blue-500',
    secondary: 'btn-secondary focus:ring-gray-500',
    danger: 'btn-danger focus:ring-red-500',
    success: 'btn-success focus:ring-green-500'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      onClick={onClick}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && <div className="loading w-4 h-4 mr-2"></div>}
      {children}
    </button>
  );
};

export default Button;