import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Home from './components/Home';
import Morebagsone from "./screens/Morebagsone"
import Morebagstwo from './screens/Morebagstwo';



function App() {
  return (
    <Routes>
   
    <Route path='/' element={<Home />}/>
    <Route path='/Morebagsone' element={<Morebagsone/>} />
    <Route path='/Morebagstwo' element={<Morebagstwo/>} />
    {/* <Route path='/Faq' element={<Faq/>} />
    <Route path='/Reviews' element={<Reviews/>} />
    <Route path='/ContactUs' element={<ContactUs/>} />
    <Route path='/LogIn' element={<LogIn/>} />
    <Route path='/LoginTwo' element={<LoginTwo/>} />
    <Route path='/GetStarted' element={<GetStarted/>} />
    <Route path='/Testhome' element={<Testhome/>} /> */}
  </Routes>
  );
}

export default App;
  
    
    
    