import React, { useState } from 'react';

const Settings = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    location: '',
    email: '',
    contactNumber: '',
    skill: '',
    biography: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className='bg-gray-200 min-h-screen flex justify-center items-center'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-2xl'>
        <h1 className='text-2xl font-semibold mb-6'>Settings</h1>
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
         <h1>First Name</h1> <input type='text' name='firstName' placeholder='First Name' value={formData.firstName} onChange={handleChange} className='p-2 border rounded' />
          <input type='text' name='lastName' placeholder='Last Name' value={formData.lastName} onChange={handleChange} className='p-2 border rounded' />
          <input type='text' name='username' placeholder='Username' value={formData.username} onChange={handleChange} className='p-2 border rounded' />
          <input type='password' name='password' placeholder='Password' value={formData.password} onChange={handleChange} className='p-2 border rounded' />
          <input type='text' name='location' placeholder='Location' value={formData.location} onChange={handleChange} className='p-2 border rounded' />
          <input type='email' name='email' placeholder='Email' value={formData.email} onChange={handleChange} className='p-2 border rounded' />
          <input type='text' name='contactNumber' placeholder='Contact Number' value={formData.contactNumber} onChange={handleChange} className='p-2 border rounded' />
          <input type='text' name='skill' placeholder='Skill/Occupation' value={formData.skill} onChange={handleChange} className='p-2 border rounded' />
          <textarea name='biography' placeholder='Biography' value={formData.biography} onChange={handleChange} className='p-2 border rounded col-span-2' />
          <div className='col-span-2 flex justify-end gap-4 mt-4'>
            <button type='button' className='px-4 py-2 bg-gray-400 text-white rounded'>Cancel</button>
            <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded'>Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;

