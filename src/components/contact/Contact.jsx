import React, {useState} from 'react';
import './contact.scss';
import {db} from '../../firebase';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    // const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [errorMsg, setErrorMsg] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // setLoading(true);

        db.collection('users').add({
            name: name,
            email: email,
            message: message
        })
        .then(() => {
            // alert('Message has been submitted!');
            setSuccessMsg(true);
            // setLoader(false);
        })
        .catch(error => {
            alert(error.message);
            setErrorMsg(true);
            // setLoader(false);
        });
        setName('');
        setEmail('');
        setMessage('');
        
    }

    return (
        <div className='contact-container'>
            <h1>Contact Us</h1>
            {
                successMsg ? 'Your message has been submitted!  Have a caffeinated day' : 
                errorMsg ? 'There was an error. Please try again or call us.' : null
            }
            <form className='contact-form' onSubmit={handleSubmit}>
                <label>Name</label>
                <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='name'required/>

                <label>Email</label>
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} id='email' placeholder='email'required/>

                <label>Message</label>
                <textarea type='text' value={message} onChange={(e) => setMessage(e.target.value)} required/>

                <button value='Submit' type='submit'>Submit</button>
            </form>
        </div>
    )
}