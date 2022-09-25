import React from 'react'

import { NavLink } from 'react-router-dom'

import './Header.css'
import { ReactComponent as FreshCo } from './Icons/freshco.svg';

const Header = () => {
    return(
        <nav>
            <div className='div-header'>
                <div className='div-svg'>
                    <FreshCo/>
                </div>
                <div style={{display: 'flex', flexDirection:'row', alignItems:'center'}}>
                    <div style={{fontFamily: "Poppins", marginRight: '10px'}}>
                    <NavLink to='/' style={{textDecoration: 'none', color: '#4F4F4F'}}>Inicio</NavLink>
                    </div>
                    <div style={{fontFamily: "Poppins", marginRight: '10px'}}>
                    <NavLink to='/' style={{textDecoration: 'none', color: '#4F4F4F'}}>Comestibles</NavLink>
                    </div>
                    <div style={{fontFamily: "Poppins", marginRight: '10px'}}>
                    <NavLink to='/' style={{textDecoration: 'none', color: '#4F4F4F'}}>Como funciona?</NavLink>
                    </div>
                    <button className='button-header'>Log out</button>
                </div>
            </div>
        </nav>
    )
}

export default Header;