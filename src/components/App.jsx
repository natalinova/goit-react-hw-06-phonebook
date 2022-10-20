import { Routes, Route } from 'react-router-dom';
import PhoneBook from './PhoneBook'
export const App = () => {
  return (
    <Routes >
      <Route path='/' element={<PhoneBook/>} />
    </Routes>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
