import React from 'react';
import img from "../assets/Detectpp.png";
function SideBar() {
    return (
        <>
            <nav className="absolute top-0 bottom-0 left-0 h-full bg-white w-[90px] overflow-hidden transition-[width] duration-200 ease-linear shadow-[0_20px_35px_rgba(0,0,0,0.1)]">
                <ul>
                    <li>
                        <a className="text-center flex transition-all duration-500 ease-[ease] p-[10px_10px_10px_21px] border-b" href="#">
                            <img src={img}  alt="logo" className="w-[45px] rounded-[50%]" />
                            <span className="nav-item font-bold pl-[15px] text-lg uppercase">Detect++</span>
                        </a>
                        
                    </li>
                    <li>
                        <a className='link' href="#">
                            <i className='fa fa-home' aria-hidden='true'></i>
                            <span className="nav-item">Home</span>
                        </a>
                        
                    </li>
                    <li>
                        <a className='link' href="#">
                            <i className='fa fa-user' aria-hidden='true'></i>
                            <span className="nav-item">Profile</span>
                        </a>
                        
                    </li>
                    <li>
                        <a className='link' href="#">
                            <i className='fa fa-wallet' aria-hidden='true'></i>
                            <span className="nav-item">Wallet</span>
                        </a>
                        
                    </li>
                    <li>
                        <a className='link' href="#">
                            <i className='fa fa-chart-bar' aria-hidden='true'></i>
                            <span className="nav-item">Analytics</span>
                        </a>
                        
                    </li>
                    <li>
                        <a className='link' href="#">
                            <i className='fa fa-tasks' aria-hidden='true'></i>
                            <span className="nav-item">Task</span>
                        </a>
                        
                    </li>
                    <li>
                        <a className='link'href="#">
                            <i className='fa fa-cog' aria-hidden='true'></i>
                            <span className="nav-item">Settings</span>
                        </a>
                        
                    </li>
                    <li>
                        <a className='link'href="#">
                            <i className='fa fa-question-circle' aria-hidden='true'></i>
                            <span className="nav-item">Help</span>
                        </a>
                        
                    </li>
                    <li>
                        <a className='link logout' href="#">
                            <i className='fa fa-sign-out-alt' aria-hidden='true'></i>
                            <span className="nav-item">Log Out</span>
                        </a>
                        
                    </li>
                   
                </ul>
            </nav>
        </>
    );
}

export default SideBar;
