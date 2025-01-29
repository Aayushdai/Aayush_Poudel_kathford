import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Top_10 from './components/Top_10'
import Gallery from './components/Gallery'
import Layout from './Layout'
import Mammel from './components/top/Mammel'
import Fish from './components/top/Fish'
import Bird from './components/top/Bird'


const MyRoutes = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/top10' element={<Top_10/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='/top10_mammel' element={<Mammel/>}/>
                <Route path='/top10_fish' element={<Fish/>}/>
                <Route path='/top10_bird' element={<Bird/>}/>
            </Route>
        </Routes>
     </BrowserRouter> 
    </>
  );
};

export default MyRoutes
