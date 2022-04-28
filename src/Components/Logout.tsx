import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { logout, selectStudent } from '../features/student/studentSlice';
import "./Logout.scss";

const Logout = () => {

  const selector = useAppSelector(selectStudent); // cant use this object to show as at first its null, so, we stringify and parse
  const selectorString = JSON.stringify(selector);
  const payload = JSON.parse(selectorString)

  const dispatch = useAppDispatch();

  return (
    <div>
        <h1>
            Welcome <span className='user__name'>{payload.name}</span><br />
            <button className='logout__button' onClick={(e) => {dispatch(logout())}}>Logout</button>
        </h1>

    </div>
  )
}

export default Logout