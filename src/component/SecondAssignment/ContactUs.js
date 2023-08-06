import React, { useState } from 'react';

const ContactUs = () => {
    const [list, setList] = useState([])
    const [data, setText] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setText({ ...data, [name]: value })
    }

    const saveComplete = () => {
        list.push(data);
        setText({ name: '', email: '', subject: '', message: '' })
    }
    
    return (
        <div>
            <div className='col-md-12'>
                <div className='contactUs text-center'>
                    <h2>CONTACT US</h2>
                </div>
                <div className='textStyle contactUs-text text-center'>
                    <div className='col-md-12'>
                        <input type='text' placeholder='Name' name='name' onChange={handleChange} value={data.name} />
                    </div>
                    <div>
                        <input type='email' name='email' placeholder='Email Address' value={data.email} onChange={handleChange} />
                    </div>
                    <div>
                        <input type='text' name='subject' placeholder='Subject' value={data.subject} onChange={handleChange} />
                    </div>
                    <div>
                        <textarea placeholder='Message' name='message' value={data.message} onChange={handleChange} />
                    </div>
                    <div className='col-md-12'>
                        <button onClick={saveComplete}>Submit</button>
                    </div>
                </div>
            </div>

            <div className='col-md-12'>
                {list.length > 0 ?
                    <div>
                        {list.map(t =>
                            <div className='d-flex'>
                                <div className='name'>Name:  {t.name}</div> ||
                                <div className='email'>Email:  {t.email}</div> ||
                                <div className='subject'>Subject:  {t.subject}</div> ||
                                <div className='message'>Messages:  {t.message}</div> ||
                            </div>
                        )}
                    </div> : ""}
            </div>
        </div>
    );
}

export default ContactUs;
