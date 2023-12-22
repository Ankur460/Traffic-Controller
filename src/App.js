
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route element={<Home/>} path='/'></Route>
        <Route element={<Login/>} path='/login'></Route>
        <Route element={<SignUp/>} path='/SignUp'></Route>
      </Routes>
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
