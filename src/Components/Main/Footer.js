import React, { useState } from "react";
import { userEmail, userGithub, userLinkedin } from "../../Data/Data";

function Footer(){
    const [formData, setFormData] = useState({
        category: "Feedback",
        message: "",
        email: ""
    });
    
    const [submitted, setSubmitted] = useState(false);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Todo: Send form data to via serverless function
        console.log("Form submitted:", formData);
        setSubmitted(true);
        
        // Reset form after 5 seconds
        setTimeout(() => {
            setFormData({
                category: "Feedback",
                message: "",
                email: ""
            });
            setSubmitted(false);
        }, 5000);
    };
    
    // Responsive styles for different screen sizes
    const formContainerStyle = {
        backgroundColor: "white", 
        padding: "30px", 
        borderRadius: "5px",
        marginBottom: "30px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    };
    
    const feedbackSuccessStyle = {
        backgroundColor: "#e67e22", 
        color: "white", 
        padding: "20px", 
        borderRadius: "5px", 
        textAlign: "center",
        marginBottom: "30px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
    };
    
    const inputStyle = {
        width: "100%",
        padding: "10px",
        borderRadius: "4px",
        border: "1px solid #ddd",
        color: "black"
    };
    
    const labelStyle = {
        display: "block", 
        marginBottom: "8px", 
        fontWeight: "500",
        color: "black"
    };
    
    // Media query style adjustments handled via className and CSS
    
    return(
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="footer-heading">Get Connected</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4">
                        <div className="flex-space-between flex-align-items-center" style={{marginTop:"50px"}}>
                            {/*
                            <a href={userLinkedin} target="_blank">
                                <img src={process.env.PUBLIC_URL + '/img/linkedin.svg'} />
                            </a>
                            */}
                            <a href={`mailTo:${userEmail}`} target="_blank" rel="noopener noreferrer">
                                <img src={process.env.PUBLIC_URL + '/img/mail.svg'} alt="Email" />
                            </a>
                            <a href={userGithub} target="_blank" rel="noopener noreferrer">
                                <img src={process.env.PUBLIC_URL + '/img/github-dark.svg'} alt="GitHub" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
                
                {/* Feedback Form Section */}
                {/* <div className="row" style={{marginTop:"50px"}}>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h3 className="section-heading-sm">Send Anonymous Feedback</h3>
                    </div>
                </div> */}
                
                {/* <div className="row">
                    <div className="col-lg-2 col-md-1 col-sm-0"></div>
                    <div className="col-lg-8 col-md-10 col-sm-12" style={{padding: "0 15px"}}>
                        {submitted ? (
                            <div className="feedback-success" style={feedbackSuccessStyle}>
                                <p style={{marginBottom: "10px", fontWeight: "500"}}>This feature is temporarily disabled.</p>
                                <p style={{margin: "0"}}>Please contact me using the email icon above.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="feedback-form" style={formContainerStyle}>
                                <div style={{marginBottom: "20px"}}>
                                    <label htmlFor="category" style={labelStyle}>
                                        Message Category:
                                    </label>
                                    <select 
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        style={{
                                            ...inputStyle,
                                            backgroundColor: "#f9f9f9",
                                        }}
                                    >
                                        <option value="Feedback">Feedback</option>
                                        <option value="Bug Report">Bug Report</option>
                                        <option value="Contact">Contact</option>
                                    </select>
                                </div>
                                
                                <div style={{marginBottom: "20px"}}>
                                    <label htmlFor="message" style={labelStyle}>
                                        Message:
                                    </label>
                                    <textarea 
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        style={{
                                            ...inputStyle,
                                            resize: "vertical",
                                        }}
                                    ></textarea>
                                </div>
                                
                                <div style={{marginBottom: "25px"}}>
                                    <label htmlFor="email" style={labelStyle}>
                                        Email (Optional):
                                    </label>
                                    <input 
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={inputStyle}
                                        placeholder="Enter your email if you'd like a response"
                                    />
                                </div>
                                
                                <div style={{textAlign: "center", marginTop: "10px"}}>
                                    <button 
                                        type="submit"
                                        className="main-button"
                                        style={{
                                            width: "100%", 
                                            maxWidth: "250px",
                                            padding: "12px 15px",
                                            fontSize: "16px"
                                        }}
                                    >
                                        Submit Feedback
                                    </button>
                                </div>
                            </form>
                        )}
                    </div> */}
                    {/* <div className="col-lg-2 col-md-1 col-sm-0"></div> */}
                {/* </div> */}
            </div>
        </footer>
    )
}

export default Footer;