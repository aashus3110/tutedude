import React from 'react'
import "./Navbar.css"
import { MdAccountCircle, MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="logo"></div>
            <div className="n-items">
                <span className='Assignment'>My Assignment</span>
                <span className='chat'>Chat with Mentor</span>
                <span className='ProfileName'>
                    <MdAccountCircle className='AccountCircle' />
                    <p className='ProfileText'>ProfileName</p>
                    < MdKeyboardArrowDown className='MdKeyboardArrowDown' />
                </span>
            </div>
        </div>

    )
}

export default Navbar