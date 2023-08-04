import React from 'react';

const Section4 = () => {
    return (
        <div className='bg-body'>
            <div className='col-md-12 bgBlack p-4'>
                <h2 style={{color:"#ff7a3d"}}>Our Services</h2>
                {/* <ul style={{color:"#ff7a3d"}} /> */}
                <div className='text-center text-white d-flex justify-content-center align-items-center text-decoration-none'>
                    <div className='col-md-6'>
                        <h4>Web Development and Design</h4>
                        <ul>
                            <li>Custom Websites Tailored to Your Needs</li>
                            <li>Mobile-friendly and Responsive Designs</li>
                            <li>User-centric UI/UX for Seamless Experience</li>
                        </ul>
                        <h2>Mobile App Development</h2>
                        <ul>
                            <li>High-Performance Apps for Android and iOS</li>
                            <li>Intuitive User Interfaces and Functionality</li>
                            <li>Continuous Support and Updates</li>
                        </ul>
                        <h2>Digital Marketing Solutions</h2>
                        <ul>
                            <li>Targeted Strategies for Online Growth</li>
                            <li>Result-driven SEO and PPC Campaigns</li>
                            <li>Content and Social Media Marketing</li>
                        </ul>
                    </div>
                    <div className='col-md-6'>
                        <h2>Consulting and Strategy</h2>
                        <ul>
                            <li>Business Analysis and Planning</li>
                            <li>Tech Consulting for Digital Transformation</li>
                            <li>Market Research and Competitor Analysis</li>
                        </ul>
                        <h2>Cloud Solutions</h2>
                        <ul>
                            <li>Cloud Infrastructure Setup and Management</li>
                            <li>Cloud Migration and Integration Services</li>
                            <li>Secure and Scalable Cloud Solutions</li>
                        </ul>
                        <h2>Branding and Identity</h2>
                        <ul>
                            <li>Memorable Logos and Visual Identity</li>
                            <li>Comprehensive Branding Strategies</li>
                            <li>Brand Guidelines for Impactful Presence</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section4;
