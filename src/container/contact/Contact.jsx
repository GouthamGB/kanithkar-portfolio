import React, { useRef } from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'









function Contact() {

  const form = useRef();


  const initialValues =  {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  
  const onSubmit = (values)=>{
    
  
      emailjs.sendForm('service_be5mwbi', 'template_9zcw3eq', form.current, 'v1Dh_VpzSGoeC6s0e')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
  }
  
  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email('Invalid Email Format').required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required")
  })


  
  return (
    <div className='contact' id='contact'>
    <div className='contact-container'>
      


    <div className='form-container'>
      <h1>Contact</h1>
      <p>
        Feel free to Contact me by submitting the form below and I will get back to you as soon as possible
      </p>


      <div className='form-section'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form ref={form}>

          <div className='form-input'>
          <label htmlFor="name">Name</label>
          <Field type="text" id='name' name='name'  placeholder="Enter Your Name" />
          <ErrorMessage name='name'/>
          </div>

          <div className='form-input'>
          <label htmlFor="email">Email</label>
          <Field type="email" id='email' name='email' placeholder="Enter Your Email"/>
          <ErrorMessage name='email'/>
          </div>

          <div className='form-input'>
          <label htmlFor="subject">Subject</label>
          <Field type="text" id='subject' name='subject' placeholder="Enter the subject"/>
          <ErrorMessage name='subject'/>
          </div>

          <div className='form-input'>
          <label htmlFor="message">Message</label>
          <Field as="textarea" name="message" rows="4" cols="40" placeholder="Enter Your Message"/>
          <ErrorMessage name='message'/>
          </div>
          <div className='button-div'>
          <button type='submit'>SUBMIT</button>
          </div>
        </Form>
        </Formik>
      </div>


      </div>
    </div>
    </div>
  )
}

export default Contact