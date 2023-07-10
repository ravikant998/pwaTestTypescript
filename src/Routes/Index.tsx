import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../component/common/Navbar'
import AboutUs from '../page/AboutUs'
import Contact from '../page/Contact'
import Home from '../page/Home'

const Index = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<AboutUs />} />
                <Route path='contact' element={<Contact />} />
            </Routes>
        </>
    )
}

export default Index