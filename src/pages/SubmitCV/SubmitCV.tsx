import React, { useState } from 'react';
import { proxy, useSnapshot } from 'valtio'; 

interface FormData {
  name: string;
  email: string;
  phone: string;
  resume: any;
}

export function  SubmitCV() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    resume: null,
  });
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.resume) {
      setError('All fields are required');
      return;
    }
    if (!formData.email.includes('@')) {
      setError('Invalid email address');
      return;
    }
   
    setFormData({ name: '', email: '', phone: '', resume: null });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = event.target;
    if (name === 'resume') {
      setFormData({ ...formData, [name]: files![0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div>
      <h1>Submit Your CV</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Resume:
          <input type="file" name="resume" onChange={handleChange} />
        </label>
        {error && <p>{error}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

