import React from 'react';
import img from "../assets/Detectpp.png";
function SideBar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <a className="logo" href="#">
                            <img src={img}  alt="logo" />
                            <span className="nav-item">Detect++</span>
                        </a>
                        
                    </li>
                    <li>
                        <a href="#">
                            <i class='fa fa-home' aria-hidden='true'></i>
                            <span className="nav-item">Home</span>
                        </a>
                        
                    </li>
                    <li>
                        <a href="#">
                            <i class='fa fa-user' aria-hidden='true'></i>
                            <span className="nav-item">Profile</span>
                        </a>
                        
                    </li>
                    <li>
                        <a href="#">
                            <i class='fa fa-wallet' aria-hidden='true'></i>
                            <span className="nav-item">Wallet</span>
                        </a>
                        
                    </li>
                    <li>
                        <a href="#">
                            <i class='fa fa-chart-bar' aria-hidden='true'></i>
                            <span className="nav-item">Analytics</span>
                        </a>
                        
                    </li>
                    <li>
                        <a href="#">
                            <i class='fa fa-tasks' aria-hidden='true'></i>
                            <span className="nav-item">Task</span>
                        </a>
                        
                    </li>
                    <li>
                        <a href="#">
                            <i class='fa fa-cog' aria-hidden='true'></i>
                            <span className="nav-item">Settings</span>
                        </a>
                        
                    </li>
                    <li>
                        <a href="#">
                            <i class='fa fa-question-circle' aria-hidden='true'></i>
                            <span className="nav-item">Help</span>
                        </a>
                        
                    </li>
                    <li>
                        <a className="logout" href="#">
                            <i class='fa fa-sign-out-alt' aria-hidden='true'></i>
                            <span className="nav-item">Log Out</span>
                        </a>
                        
                    </li>
                   
                </ul>
            </nav>
        </>
    );
}

export default SideBar;
