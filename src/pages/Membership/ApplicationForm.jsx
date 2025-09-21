import React, { useState } from 'react';
import Form from '../../components/ui/Form';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    major: '',
    year: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Mock submit
    alert('Application submitted');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Membership Application</h1>
      <Form onSubmit={handleSubmit}>
        <Input label="Name" name="name" value={formData.name} onChange={handleChange} />
        <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
        <Input label="University" name="university" value={formData.university} onChange={handleChange} />
        <Input label="Major" name="major" value={formData.major} onChange={handleChange} />
        <Input label="Year" name="year" value={formData.year} onChange={handleChange} />
        <Button type="submit">Submit Application</Button>
      </Form>
    </div>
  );
};

export default ApplicationForm;