import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Find your perfect dream Event </h3>
                <p>
                The Rumi Art and Events team received innovative training and was encouraged to think ​beyond the box. 
                We offer original answers to all of your event-related problems. Our skilled ​team of experts knows how to
                 make your event appear classy, feel unique, and operate with ​style! Because we are passionate about what
                  we do and have expertise working with clients ​from many industries, we meticulously organise and carry
                   out each event.


                </p>
                <p><strong>Book Now!</strong> If you are looking for your perfect dream Event.</p>
                <div className="social-icons">
                    <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                    <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                    <a href="https://youtube.com"><i className="fab fa-youtube"></i></a>
                </div>
                <p>Visit: <a href="http://www.harmonymarriagebureau.in">www.harmonymarriagebureau.in</a></p>
            </div>

            <div className="footer-section">
                <h3>Contact Information</h3>
                <p><strong>Monday - Saturday:</strong> 10 a.m. to 2:00 p.m., 4:00 p.m. to 6:00 p.m.</p>
                <p>Please call for an Appointment</p>
                <p><strong>Office Telephones:</strong> +91 8484008423 (Timing: 10am - 2pm, 4pm - 6pm)</p>
                <p><strong>WhatsApp number:</strong> +91 9890022323</p>
                <p>Email:</p>
                <p>hindumarriageindia@gmail.com</p>
                <p>webmaster@hindumarriage.com</p>
                <p><strong>Holidays:</strong> Sunday and major festivals of India</p>
            </div>

            <div className="footer-section">
                <h3>Become A Member</h3>
                <p>We invite you to Register your Matrimonial Profile and become our Esteemed Member</p>
                <p><a href="/register">Register Your Profile Now!</a></p>
                <p><a href="/login">Member Login</a></p>
            </div>

            <div className="footer-section">
                <h3>Interesting Links</h3>
                <ul>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/testimonials">Instragram</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/search">Search</a></li>
                    <li><a href="/privacy-policy">Privacy Policy</a></li>
                    <li><a href="/refund-policy">Refund Policy</a></li>
                    <li><a href="/terms-and-conditions">Terms & Conditions</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
