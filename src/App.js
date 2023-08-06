import { Route, Routes } from 'react-router-dom';
import './App.css';
import LogoImg from './component/LogoImg';
import { navBar } from './component/NavBar2';
import Navbar from './component/Navbar';
import Index from './component/Index/Index';
import LoginPage from './component/SecondAssignment/LoginPage';
function App() {
  return (
    <div className=" w-100 h-100">
      <LoginPage />
      {/* <Apps /> */}
      {/* <div className='container text-align-center d-flex justify-context-center align-items-center w-100 h-100 bg-black'>
        <LogoImg />
        <Navbar />
      </div>
      <div className='w-100 h-100'>
        <Routes>
          <Route path='/' element={<Index />} />
          {navBar.map((t) => (
            <Route path={t.service} element={t.value} />
          )
          )}
        </Routes>
      </div> */}
    </div>
  );
}

export default App;
