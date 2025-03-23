import React, { useState, useEffect } from 'react';

const Settings = () => {
  const [profile, setProfile] = useState({
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

  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (savedProfile) {
      setProfile(savedProfile);
    }
  }, []);

  const updateProfile = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const resetForm = () => {
    setProfile({
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
  };

  const saveChanges = (e) => {
    e.preventDefault();
    localStorage.setItem('userProfile', JSON.stringify(profile));
    setIsUpdated(true);
    console.log('Profile updated:', profile);
  };

  return (
    <div className='bg-gray-200 min-h-screen flex justify-center items-center'>
      <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-2xl'>
        <h1 className='text-2xl font-semibold mb-6'>Settings</h1>

        {isUpdated && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded">
            <p>Changes saved successfully!</p>
          </div>
        )}

        <form onSubmit={saveChanges} className='grid grid-cols-2 gap-4'>
          <div>
            <label className='block mb-1'>First Name</label>
            <input type='text' name='firstName' value={profile.firstName} onChange={updateProfile} className='p-2 border rounded w-full' />
          </div>

          <div>
            <label className='block mb-1'>Last Name</label>
            <input type='text' name='lastName' value={profile.lastName} onChange={updateProfile} className='p-2 border rounded w-full' />
          </div>

          <div>
            <label className='block mb-1'>Username</label>
            <input type='text' name='username' value={profile.username} onChange={updateProfile} className='p-2 border rounded w-full' />
          </div>

          <div>
            <label className='block mb-1'>Password</label>
            <input type='password' name='password' value={profile.password} onChange={updateProfile} className='p-2 border rounded w-full' />
          </div>

          <div>
            <label className='block mb-1'>Location</label>
            <input type='text' name='location' value={profile.location} onChange={updateProfile} className='p-2 border rounded w-full' />
          </div>

          <div>
            <label className='block mb-1'>Email</label>
            <input type='email' name='email' value={profile.email} onChange={updateProfile} className='p-2 border rounded w-full' />
          </div>

          <div>
            <label className='block mb-1'>Contact Number</label>
            <input type='text' name='contactNumber' value={profile.contactNumber} onChange={updateProfile} className='p-2 border rounded w-full' />
          </div>

          <div>
            <label className='block mb-1'>Skill/Occupation</label>
            <input type='text' name='skill' value={profile.skill} onChange={updateProfile} className='p-2 border rounded w-full' />
          </div>

          <div className='col-span-2'>
            <label className='block mb-1'>Biography</label>
            <textarea name='biography' value={profile.biography} onChange={updateProfile} className='p-2 border rounded w-full' />
          </div>

          <div className='col-span-2 flex justify-end gap-4 mt-4'>
            <button type='button' onClick={resetForm} className='px-4 py-2 bg-red-600 text-white rounded'>Cancel</button>
            <button type='submit' className='px-4 py-2 bg-blue-700 text-white rounded'>Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;





