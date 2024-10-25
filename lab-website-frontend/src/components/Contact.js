// Contact.js
import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-section">
            <div className="contact-map">
                <iframe
                    title="OICR Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.441326438572!2d-79.38949358450264!3d43.65999687912157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d7e4338eb3%3A0x54b8bcbfb395c885!2sOntario%20Institute%20for%20Cancer%20Research!5e0!3m2!1sen!2sca!4v1617926587049!5m2!1sen!2sca"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
            <div className="contact-info">
                <div className="contact-address">
                    <h3>Ontario Institute for Cancer Research</h3>
                    <p>MaRS Centre<br />
                        661 University Avenue, Suite 510<br />
                        Toronto, Ontario Canada, M5G 0A3</p>
                </div>
                <div className="contact-details">
                    <h3>Contact Information</h3>
                    <p>Name: Dr. John Doe</p>
                    <p>Title: Senior Research Scientist</p>
                    <p>Email: john.doe@oicr.on.ca</p>
                </div>
            </div>
        </div>
    );
}

export default Contact;
