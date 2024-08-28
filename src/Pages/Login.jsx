import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { navigate } = useContext(ShopContext);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here (e.g., API call)
    // On success, navigate to the home page
    navigate('/');
  };

  return (
    <form 
      onSubmit={handleFormSubmit} 
      className='flex flex-col items-center w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] 2xl:w-[25%] m-auto mt-14 gap-4 text-gray-800'
    >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      
      {/* Conditional input field for Name */}
      {currentState === 'Sign Up' && (
        <input 
          className='w-full px-3 py-2 border border-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-800' 
          type='text' 
          required 
          placeholder='Name' 
        />
      )}
      
      {/* Email input field */}
      <input 
        className='w-full px-3 py-2 border border-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-800' 
        type='email' 
        required 
        placeholder='Email' 
      />
      
      {/* Password input field with visibility toggle */}
      <div className='w-full relative'>
        <input 
          className='w-full px-3 py-2 border border-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-gray-800' 
          type={passwordVisible ? 'text' : 'password'} 
          required 
          placeholder='Password' 
        />
        <span 
          className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
          onClick={togglePasswordVisibility}
          aria-label={passwordVisible ? 'Hide password' : 'Show password'}
        >
          {passwordVisible ? '🙈' : '👁️'}
        </span>
      </div>

      {/* Links to switch between Login and Sign Up */}
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer hover:underline'>Forgot your password?</p>
        {currentState === 'Login' ? (
          <p className='cursor-pointer hover:underline' onClick={() => setCurrentState('Sign Up')}>Create Account</p>
        ) : (
          <p className='cursor-pointer hover:underline' onClick={() => setCurrentState('Login')}>Login Here</p>
        )}
      </div>

      {/* Submit button */}
      <button 
        className='bg-black text-white font-light px-8 py-2 mt-4 w-full rounded hover:bg-gray-800 transition-colors'
        type='submit'
      >
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
