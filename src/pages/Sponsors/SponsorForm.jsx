import React, { useState } from 'react';
import Form from '../../components/ui/Form';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const SponsorForm = () => {
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    level: 'Bronze',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Mock submit
    alert('Sponsor form submitted');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Sponsor Interest Form</h1>
      <Form onSubmit={handleSubmit}>
        <Input label="Company Name" name="company" value={formData.company} onChange={handleChange} />
        <Input label="Contact Person" name="contact" value={formData.contact} onChange={handleChange} />
        <Input label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Sponsorship Level</label>
          <select name="level" value={formData.level} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded">
            <option>Bronze</option>
            <option>Silver</option>
            <option>Gold</option>
          </select>
        </div>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default SponsorForm;