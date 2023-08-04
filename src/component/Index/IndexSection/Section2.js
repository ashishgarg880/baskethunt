import React from 'react';
import secondImg from '../../../images/baskethunt 1.png';
const Section2 = () => {
    return (
        <div>
            <div className='container d-flex align-items-center bg-black'>
                <div className='col-md-6 m-4'>
                    <h2>Welcome to Business with BasketHunt</h2>
                    <h4>Where We Build Your Visions</h4>
                    <p>Welcome to the enriching world of Business With Baskethunt, where entrepreneurial aspirations are nurtured, and business intellect thrives. Our platform is a haven for aspiring entrepreneurs seeking the wisdom of seasoned experts, comprehensive education, and access to funding opportunities. For accomplished business leaders, we offer a sanctuary of innovation, marketing prowess, and team development, enabling ventures to scale new heights. Retail luminaries find solace in our inventory acumen, customer retention strategies, and pricing artistry. </p>
                    <br />
                    <p>Join us, and let’s embark on an intellectual journey of growth and success.</p>
                    <h4>Visit our parent site:</h4>
                    <a href='https://www.baskethunt.com/'>https://www.baskethunt.com/</a>
                </div>
                <div className='col-md-6'>
                    <img src={secondImg} alt='second Images'/>
                </div>
            </div>
        </div>
    );
}

export default Section2;
