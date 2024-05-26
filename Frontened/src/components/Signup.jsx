import React from 'react';
import {Link} from 'react-router-dom';
import Login from './Login';
import {useForm} from 'react-hook-form';

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    console.log('Form Submitted', data);
  };

  return (
    <>
    <div className='flex h-screen items-center justify-center'>
     <div  className="w-[600px]"> 
     {/*we have replaced dialog to div because for signup we are opening a whole new page that has been  */}
    {/* done via routing and for login we need to open it by just clicking it */}
        <div className="modal-box">
            
          <h3 className="font-bold text-lg">Hello!</h3>

          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link to='/' className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                X
            </Link>
          

          <h3 className="font-bold text-lg"></h3>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-80 px-3 py-2 border rounded-md outline-none"
              {...register('name', { required: true })}
            />
                                      {errors.name && <p className="text-red-500">Email is required.</p>}


          </div>
          {/* Email */}
          <h3 className="font-bold text-lg"></h3>
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
          {/*Password*/}
          <h3 className="font-bold text-lg"></h3>
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
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200 ">
              Signup
            </button>
            <p className='text-xl'>
               Already existing account? {""}
              <button
                
                className="underline text-blue-600 cursor-pointer"
                onClick={()=>
                    document.getElementById("my_modal_1").showModal()
                }
              >
                  Login
              </button>
              {""}
              <Login/>
              {/*need to import link from react router dom because it was showing error login is not define */}
            </p>
          </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup