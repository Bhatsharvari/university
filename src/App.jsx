import React from 'react'
import {  BrowserRouter,Routes,Route } from 'react-router-dom'

import VideoSlider from './VideoSlider'
import Card from './Card';
import Form from './Form'
import './Global.css'
import Footer from './Footer';
import Navbar from './Navbar';
import Home from './Home';
import About from './About'
import Contact from './Contact'
import Pharmacy from './Pharmacy';
import ImageSlider from './ImageSlider';
import University from './University';
import Search from './Search';



const App = () => {
  return (
    <div>
     
      
  <BrowserRouter>
    <div>
    <Navbar/>
<ImageSlider/>
<University/>
<Search/>
   <VideoSlider/>
     <Card/> 
     <Form/>
     <Footer/>
 <Routes>

  {/* //navbar */}
  <Route path='./Navbar' element={<Navbar/>}></Route>
      <Route path='./Home'element={<Home/>} ></Route>
      <Route path='./About' element={<About/>} ></Route>
      <Route path='./Contact' element={<Contact/>}></Route>
    <Route path='/Pharmacy' element={<Pharmacy/>}></Route>
    <Route path='/ImageSlider' element={<ImageSlider/>}></Route>
    <Route path='/University' element={<University/>}></Route>
    <Route path='/Search' element={<Search/>}></Route>
  </Routes>


    <Routes>
 
      <Route path='./VideoSlider' Component={VideoSlider}></Route>
      <Route path='./Card' Component={Card}></Route> 
      <Route path='./Form' Component={Form}></Route>
      <Route path='./Footer' Component={Footer}></Route>
      
  </Routes>


  

    </div>
    </BrowserRouter>

   </div>
  )
}

export default App
