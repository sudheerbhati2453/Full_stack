import React, { useState } from 'react';
import './NewsLetter.css';
import news from './news.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


function Newsletter() {
    const [email, setEmail] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your form submission logic here
        console.log('Form submitted with email:', email);
    };

    return (
      <div className='news'>
        <section className="newsletter-sec section ">
            <div className="sec-wp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="newsletter-box text-center white-text">
                              <img src={news} alt='' />
                                <div className="bg-overlay dark-overlay"></div>
                                <div className="sec-wp">
                                    <div className="newsletter-box-text">
                                        <h2 className="h2-title">Subscribe our newsletter</h2>
                                        <p>This is Lorem ipsum dolor sit amet consectetur adipisicing elit ad veritatis.</p>
                                    </div>
                                    <form onSubmit={handleSubmit} className="newsletter-form">
                                        <input
                                            type="email"
                                            className="form-input"
                                            placeholder="Enter your Email Here"
                                            value={email}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        <button type="submit" className="sec-btn primary-btn">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
}

export default Newsletter;
