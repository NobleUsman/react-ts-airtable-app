import React from 'react';
import './App.scss';
import { useAppSelector } from './app/hooks';
import Login from './Components/Login';
import Logout from './Components/Logout';
import { selectStudent } from './features/student/studentSlice';

const App: React.FC = () => {

  const selector = useAppSelector(selectStudent);

  return (
    <>
    {
      // if student present (logged in), show logout component, else login component
      selector ? <Logout/> : <Login/>
    }
    </>
  );
}

export default App;