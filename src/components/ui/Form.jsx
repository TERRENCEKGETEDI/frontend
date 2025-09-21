import React from 'react';

const Form = ({ children, onSubmit, ...props }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(e);
  };

  return (
    <form onSubmit={handleSubmit} {...props}>
      {children}
    </form>
  );
};

export default Form;