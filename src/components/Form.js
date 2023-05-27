import React, { useState } from 'react';
import bgImg from '../assets/Brown Modern Testimonials Instagram Post.png';
import { useForm } from 'react-hook-form';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import "../styles/Form.css"



export default function Form() {

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const history = useHistory();
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
      const password = watch("password");  
    
      const onSubmit = (data) => {
        console.log(data); //sends user details to console
        reset(); // Reset the form fields
        history.push('/home'); // Navigate to the main page
      };
      

      
    
  return (
    <section>
        <div className="register">
            <div className="col-1">
                <h2>Sign In</h2>
                <span>Register to use The Bikepacker App</span>

                <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("username")} placeholder='Username' />
                    <input type="text" {...register("email")} placeholder='E-mail' />
                    
                    <div className="input-with-icon">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                className="input-field"
                {...register("password", { required: true })} // Register password field
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="icon"
                onClick={togglePasswordVisibility}
              />
            </div>
            <div className="input-with-icon">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="input-field"
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === password
                })}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="icon"
                onClick={togglePasswordVisibility}
              />
            </div>
                    {errors.mobile?.type === "required" && "Mobile Number is required"}
                    {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
                    <button type='submit' className='btn'>Sign In</button>
                </form>

            </div>
            <div className="col-2">
                <img src={bgImg} alt="" />
            </div>
        </div>
    </section>
  )
}








