import React, { useState } from 'react'
import { useAppDispatch } from '../app/hooks';
import { login } from '../features/student/studentSlice';
import "./Login.scss";

const Login = () => {

    const [name, setName] = useState("");

    const dispatch = useAppDispatch();
    // React.FormEvent<HTMLButtonElement>
    // React.FormEvent<HTMLFormElement>
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // send payload on button click ( submission ), so using dispatch from useAppDispatch() hook, call login method, create & pass the payload
      dispatch(login({
        name: name, // sending the name that we got from the form input
        loggedIn: true, // to toggle through login/logout
      }));
    };

  return (
    <div className='login'>
        <form className='login__form' onSubmit={(e) => handleSubmit(e)}>
            <h1>Student Name : </h1>
            <input type="name" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
            <button type='submit' className='submit__btn'>Log In</button>
            <h4>{name}</h4>
        </form>
    </div>
  )
}

export default Login