import React from 'react';
import img from '../../../images/baskethunt3.png';
const Section5 = () => {
    return (
        <div>
            <div className='col-md-12 d-flex p-4 m-auto'>
                <div className='col-md-4'>
                    <img src={img} alt='girls' />
                </div>
                <div className='col-md-6'>
                    <div className=''>
                        <h2>Increase your client for better business</h2>
                        <br />
                        <p>It is a long establish fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'</p>
                        <h3>QUATRELY AVERAGE TRAFFIC</h3>
                        <div className="progress-bar-container" >
                            <div className="progress-bar" id="progress-bar-quarterly"></div>
                        </div>
                        <h2>Monthly Average Traffic</h2>
                        <div className="progress-bar-container" >
                            <div className="progress-bar" id="progress-bar-monthly"></div>
                        </div>

                        <h2>Daily Average Traffic</h2>
                        <div className="progress-bar-container" >
                            <div className="progress-bar" id="progress-bar-daily"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section5;
