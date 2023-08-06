import React from 'react';
import ContactUs from './ContactUs';
import Navbar from './Navbar';
import Images from './Images';
import Text from './Text';

const LoginPage = () => {
    return (
        <div>
            <div className='container'>
                <header>
                    <h1>GET IN <span style={{ color: "#FF7A3D" }}>TOUCH</span></h1>
                </header>
                <div className='col-md-12 d-flex justify-content-center align-items-center'>
                    <div className='col-md-6'>
                        <div className='col-md-12'>
                            <Images />
                        </div>
                        <div className='col-md-12'>
                            <Text />
                        </div>
                        <div className='col-md-12'>
                            <Navbar />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <ContactUs />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
