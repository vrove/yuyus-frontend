import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container grid3">
                    <div className="box">
                        <h1>Yuyus</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, quia eius est sunt consectetur rem possimus officia minima reiciendis perspiciatis! Soluta corrupti nesciunt suscipit repellendus adipisci reiciendis veritatis, accusantium saepe?</p>
                    </div>
                    <div className='box'>
                        <h2>About Us</h2>
                        <ul>
                            <li>Careers</li>
                            <li>Our Stories</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Customer Care</h2>
                        <ul>
                            <li>Help Center</li>
                            <li>How To Buy</li>
                            <li>How to Pick your Order</li>
                            <li>Returns & Refunds</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Contact Us</h2>
                        <ul>
                            <li>Jln. Kebenaran, Airmadidi, Minahasa Utara</li>
                            <li>Email : yuyus.cc@email.com</li>
                            <li>Phone : +8866554422</li>

                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer