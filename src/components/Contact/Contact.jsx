import React from "react";
import { Form } from "react-bootstrap";
import Footer from "../Footer/Footer";
import "./Contact.css"

const Contact = () => {
  return (
      <>
    <div className="contact">
        <div className="contact-form">
      <h1>Get in Touch!</h1>
      <p>
        Please use the form below to contact us. We look forward to working with
        you and will get back to you as soon as possible
      </p>
      <h3>For quick contact please call <span style={{color:"#337AB7"}}>1300 520 889</span></h3>
      <Form style={{width:"75%", margin:"auto"}}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter your Name" style={{borderRadius:"10px"}} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Your email address" style={{borderRadius:"10px"}}/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Subject" style={{borderRadius:"10px"}}/>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} placeholder="How can we help you?" style={{borderRadius:"10px"}} />
        </Form.Group>
        <button type="submit">Submit</button>
      </Form>
      </div>  
    </div>
    <Footer></Footer>
    </>
  );
};

export default Contact;
