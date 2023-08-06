import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className='col-md-12 container navbar'>
                <ul className='d-flex justify-content-center align-items-center'>
                    <li>
                        <i className='fa-brands fa-facebook-f'></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-instagram"></i>
                    </li>
                    <li>
                        <i class="fa-brands fa-youtube"></i>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
