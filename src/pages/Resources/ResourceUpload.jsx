import React, { useState } from 'react';
import Form from '../../components/ui/Form';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const ResourceUpload = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = () => {
    // Mock upload
    alert('Resource uploaded');
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload Resource</h1>
      <Form onSubmit={handleSubmit}>
        <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input label="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <Input label="File" type="file" onChange={(e) => setFile(e.target.files[0])} />
        <Button type="submit">Upload</Button>
      </Form>
    </div>
  );
};

export default ResourceUpload;