import React from 'react';
import img2 from '../../../images/baskethunt2.png';
const Section1 = () => {
    return (
        <div>
            <div className='imgApp bgBlack p-5 w-100 h-100'>
                <div className='col-md-12 d-flex'>
                    <div style={{ paddingLeft: "40px" }} className='col-md-6 loadContent'>
                        <h2 style={{ color: "#fff" }}>ABOVE.</h2>
                        <h2 style={{ color: "#ff7a3d" }}>BEYOND.</h2>
                        <h2 style={{ color: "#fff" }}>TOGETHER.</h2>
                        <button style={{ color: "#fff", backgroundColor: "#ff7a3d", padding: "10px 15px" }}>Instant Assistance  {"->"}</button>
                        <a href="" style={{ marginLeft: "10px", textDecoration: "none" }}>Get In Touch</a>
                    </div>
                    <div className='col-md-6 h-25'>
                        <img src={img2} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section1;
