import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleBlur = (field) => {
        if (field === 'name' && !name) {
            setErrors((prev) => ({ ...prev, name: 'Name is required.' }));
        } else if (field === 'email') {
            if (!email) {
                setErrors((prev) => ({ ...prev, email: 'Email is required.' }));
            } else if (!/\S+@\S+\.\S+/.test(email)) {
                setErrors((prev) => ({ ...prev, email: 'Invalid email address.' }));
            } else {
                setErrors((prev) => ({ ...prev, email: '' })); // Clear error if valid
            }
        } else if (field === 'message' && !message) {
            setErrors((prev) => ({ ...prev, message: 'Message is required.' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            handleBlur('name');
            handleBlur('email');
            handleBlur('message');
            return;
        }
        // Handle form submission logic here
        console.log('Form submitted:', { name, email, message });
        // Clear the form
        setName('');
        setEmail('');
        setMessage('');
        setErrors({}); // Reset errors
    };

    return (
        <section>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        onBlur={() => handleBlur('name')} 
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        onBlur={() => handleBlur('email')} 
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div>
                    <textarea 
                        placeholder="Message" 
                        value={message} 
                        onChange={(e) => setMessage(e.target.value)} 
                        onBlur={() => handleBlur('message')} 
                    />
                    {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;