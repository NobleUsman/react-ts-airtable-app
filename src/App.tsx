import React from 'react';
import './App.scss';
import { useAppSelector } from './app/hooks';
import Login from './Components/Login';
import Logout from './Components/Logout';
import { selectStudent } from './features/student/studentSlice';

const App: React.FC = () => {

  const selector = useAppSelector(selectStudent); // cant use this object to show as at first its null, so, we stringify and parse
  const selectorString = JSON.stringify(selector);
  const payload = JSON.parse(selectorString)

  return (
    <>
    {
      // if student present (logged in), show logout component, else login component
      payload ? <Logout/> : <Login/>
    }
    </>
  );
}

export default App;