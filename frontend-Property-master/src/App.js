
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Register from './components/login';
import AddProperty from './components/AddProperty';
import Pages from './components/Page';
import Header from './components/Header';
import Home from './components/Home';
import SignUp from './components/Sign-up';
import SignIn from './components/Sign-in';
import Contact from './components/Contact';
import UserProperty from './user-property';
import Favorite from './components/Favorite';
import AboutUs from './components/AboutUs.js';

function App() {
  return <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/header' element={<Header/>}/>
    <Route path='/register' element={<SignUp/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
  <Route path="/AboutUs" element={<AboutUs/>} />
  <Route path="/AddProperty" element={<AddProperty />} />
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/user-property' element={<UserProperty/>}/>
  <Route path='/fav' element={<Favorite/>}/>
  </Routes>
  <Pages/>

  </>
}

export default App;
