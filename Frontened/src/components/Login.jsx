import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log('Form Submitted', data);
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button inside form to close modal */}
            <button 
              type="button" 
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
              onClick={() => document.getElementById('my_modal_1').close()}
            >
              ✕
            </button>

            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-2 border rounded-md outline-none"
                {...register('email', { required: true })}
              />
              {errors.email && <p className="text-red-500">Email is required.</p>}
            </div>

            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-2 border rounded-md outline-none"
                {...register('password', { required: true })}
              />
              {errors.password && <p className="text-red-500">Password is required.</p>}
            </div>

            {/* Button */}
            <div className="flex justify-around mt-4">
              <button 
                type="submit" 
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Login
              </button>
            </div>
          </form>
          <p className="mt-4 text-center">
            Not registered?{' '}
            <Link to="/signup" className="underline text-blue-600 cursor-pointer">
              Signup
            </Link>
          </p>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
