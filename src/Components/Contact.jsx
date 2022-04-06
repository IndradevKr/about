import React from 'react';
import './style.css';
import emailjs from '@emailjs/browser';

function Contact(){

    const [formData, setFormData] = React.useState({
        fullName: '',
        email: '',
        subject: '',
        message: "",
    })
    const [status, setStatus] = React.useState(false);
    React.useEffect( ()=> {
        if(status === true){
            setTimeout( () => {
                setStatus(false);
            }, 2000 )
        } 
    }, [status] )

    function handleChange(event){
        const {name, value} = event.target 
        setFormData( prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        } )
    }


    function handleSubmit(event){
        const templateParams= {
            fullName: formData.fullName,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
        }

        emailjs.send(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, templateParams, `${process.env.REACT_APP_USER_ID}`)
        .then(function(response) {
            // console.log('SUCCESS!', response.status, response.text);
            setStatus(true);
            setFormData({
                fullName: '',
                email: '',
                message: "",
                subject: "",
            });
        }, function(error) {
            // console.log('FAILED...', error);
            setStatus(false);
        });
        event.preventDefault()
    }

    return(
        <>
            <section id="contact" className="section-contact section">
                <div className="section-heading">
                    <h3>Contact Me</h3>
                </div>

                <div className="contact-form-container">
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="fullName">Full Name<sup className="sup">*</sup> </label>
                            <input type="text" className="form-input" id="fullName" name="fullName" autoComplete='off' 
                            value={formData.fullName} onChange={handleChange} required/>

                            <label htmlFor="email">Email<sup className="sup">*</sup> </label>
                            <input type="email" id="email" name="email" className="form-input" autoComplete='off' 
                            value={formData.email} onChange={handleChange}  required/>

                            <label htmlFor="subject">Subject<sup className="sup">*</sup> </label>
                            <input type="text" className="form-input" id="subject" name="subject" autoComplete='off' 
                            value={formData.subject} onChange={handleChange} required/>
                            
                            <label htmlFor="message">Message<sup className="sup">*</sup> </label>
                            <textarea name="message" id="message" cols="30" rows="7" value={formData.message} onChange={handleChange} required>Type your message here..</textarea>
                            <button className="btn">Send Email</button>
                        </form>
                        {status && (
                        <div className="response-container">
                            <p className="response">Message sent successfully!</p>
                        </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;