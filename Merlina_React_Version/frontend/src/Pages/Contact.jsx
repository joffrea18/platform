import React from 'react';
import Button from 'react-button-component';

const Contact = () => {
    return (
        <div>
           <form action="">
            <fieldset id='contact'>
                <h2>Contact Us</h2>
                    <label htmlFor="">
                        <input type="text" 
                        name="name" 
                        required 
                        placeholder='name *'/>
                    </label>
                    <label htmlFor="">
                        <input type="text"
                        name="lastname" 
                        required
                        placeholder='lastname *'
                        />
                    </label>
                    <label htmlFor="">
                        <input type="email"
                        name="email" 
                        required
                        placeholder='email * example@email.com'
                        />
                    </label>
                    <label htmlFor="">
                        <input type="textarea"
                        name="description" 
                        required
                        placeholder='Please indicate your requirement here.'
                        />
                    </label>
                    <div className="contact">
                        <Button >Send Request</Button>
                    </div>
            </fieldset>

           </form>
            
        </div>
    );
}

export default Contact;
