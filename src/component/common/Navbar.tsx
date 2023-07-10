import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Logo/Logo-Full-Light.png'
import { NavbarLinks } from '../../data/navbar_links'
import { headerType } from '../../types/header'


const Navbar = () => {
    // console.log("NavbarLinks--->", NavbarLinks)
    return (
        <>
            <div className='header'>

                <div className='logo'>
                    <img src={logo} alt="" />
                </div>

                <div className='navbarLinks'>
                    {
                        NavbarLinks.map((navBar: headerType, index: number) => {
                            return (
                                <div key={index} className='links-navbar'>
                                    <NavLink to={navBar.path}  >
                                        {navBar.title}
                                    </NavLink>
                                </div>


                            )
                        })
                    }
                </div>

                <div className='auth-links'>
                    <button>Login </button>
                    <button>Sign Up</button>
                </div>

            </div>
        </>
    )
}

export default Navbar