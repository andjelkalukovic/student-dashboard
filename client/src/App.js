import './App.css'
import Login from './layout/public/components/Login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './layout/public/components/Registration';
import Home from './layout/private/Home';
import PrivateRoutes from './layout/private/PrivateRoutes';
import FormDetails from './layout/private/FormDetails';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/details' element={<FormDetails />}></Route>
        </Route>
        <Route path='/' element={<Login />}></Route>
        <Route path='/register' element={<Registration />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
