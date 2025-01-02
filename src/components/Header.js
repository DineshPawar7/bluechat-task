import React, { useState, useEffect } from 'react';
import "../styles/Header.css";
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineLock, AiOutlinePlus, AiOutlineUpload } from 'react-icons/ai';
import { IoIosLink } from "react-icons/io";
import { ImSpinner11 } from "react-icons/im";


const Header = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <header className='header'>
            <div className='left-section'>
                {loading ? (
                    <>
                    <div className='skeleton'></div>
                    <div className='skeleton'></div>
                    <div className='skeleton'></div>
                    </>
                ) : (
                    <>

                    <AiOutlineArrowLeft className="icon" />
                    <AiOutlineArrowRight className="icon" />
                    <ImSpinner11 className="icon" />
                    </>
                )}
            </div>

            <div className='center-section'>
                <AiOutlineLock className="icon-center" />
                <a href='https://bluereceipt.com' className='link'>bluereceipt.com</a>
                <IoIosLink className="icon-center" />
            </div>

            <div className='right-section'>
                <AiOutlinePlus className="icon"/>
                <AiOutlineUpload className="icon" />
            </div>


        </header>
    )
}

export default Header;