import React from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { logout, selectStudent } from '../features/student/studentSlice';
import "./Logout.scss";

const Logout: React.FC = () => {

  const selector = useAppSelector(selectStudent);
  const dispatch = useAppDispatch();

  return (
    <div>
        <h1>
            Welcome <span className='user__name'>{selector?.name}</span><br />
            <button className='logout__button' onClick={(e) => {dispatch(logout())}}>Logout</button>
        </h1>

    </div>
  )
}

export default Logout