import React, { useState, useEffect } from 'react';

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
    profilePicture: '', // New field for profile picture
  });

  const [isSuccess, setIsSuccess] = useState(false);

  // Load saved user profile on component mount
  useEffect(() => {
    const savedUserProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedUserProfile) {
      setFormData(savedUserProfile);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Profile Picture Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, profilePicture: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      location: '',
      email: '',
      contactNumber: '',
      skill: '',
      biography: '',
      profilePicture: '',
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    localStorage.setItem('userProfile', JSON.stringify(formData));
    setIsSuccess(true);
    
    console.log('User profile updated:', formData);
  };

  return (
    <div className='bg-gray-200 min-h-screen flex justify-center items-center'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-2xl'>
        <h1 className='text-2xl font-semibold mb-6'>Settings</h1>

        {isSuccess && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded">
            <p>Changes saved successfully!</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
          {/* Profile Picture Upload */}
          <div className="col-span-2 flex flex-col items-center">
            <label className="block mb-1 text-center" htmlFor="profilePicture">Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="p-2 border rounded w-full"
            />
            {formData.profilePicture && (
              <img src={formData.profilePicture} alt="Profile Preview" className="mt-2 w-24 h-24 rounded-full object-cover" />
            )}
          </div>

          {/* First Name */}
          <div>
            <label className='block mb-1'>First Name</label>
            <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} className='p-2 border rounded w-full' />
          </div>

          {/* Last Name */}
          <div>
            <label className='block mb-1'>Last Name</label>
            <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} className='p-2 border rounded w-full' />
          </div>

          {/* Other Form Fields */}
          <div>
            <label className='block mb-1'>Username</label>
            <input type='text' name='username' value={formData.username} onChange={handleChange} className='p-2 border rounded w-full' />
          </div>
          <div>
            <label className='block mb-1'>Password</label>
            <input type='password' name='password' value={formData.password} onChange={handleChange} className='p-2 border rounded w-full' />
          </div>
          <div>
            <label className='block mb-1'>Location</label>
            <input type='text' name='location' value={formData.location} onChange={handleChange} className='p-2 border rounded w-full' />
          </div>
          <div>
            <label className='block mb-1'>Email</label>
            <input type='email' name='email' value={formData.email} onChange={handleChange} className='p-2 border rounded w-full' />
          </div>
          <div>
            <label className='block mb-1'>Contact Number</label>
            <input type='text' name='contactNumber' value={formData.contactNumber} onChange={handleChange} className='p-2 border rounded w-full' />
          </div>
          <div>
            <label className='block mb-1'>Skill/Occupation</label>
            <input type='text' name='skill' value={formData.skill} onChange={handleChange} className='p-2 border rounded w-full' />
          </div>

          {/* Biography */}
          <div className='col-span-2'>
            <label className='block mb-1'>Biography</label>
            <textarea name='biography' value={formData.biography} onChange={handleChange} className='p-2 border rounded w-full' />
          </div>

          {/* Buttons */}
          <div className='col-span-2 flex justify-end gap-4 mt-4'>
            <button type='button' onClick={handleReset} className='px-4 py-2 bg-red-400 text-white rounded'>Cancel</button>
            <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded'>Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;




