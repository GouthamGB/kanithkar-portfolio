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
      <h1>Contact</h1>


    <div className='form-container'>

      <div className="address">

      </div>


      <div className='form-section'>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form ref={form}>
          <label htmlFor="name">Name</label>
          <Field type="text" id='name' name='name'/>
          <ErrorMessage name='name'/>

          <label htmlFor="email">Email</label>
          <Field type="email" id='email' name='email'/>
          <ErrorMessage name='email'/>

          <label htmlFor="subject">Subject</label>
          <Field type="text" id='subject' name='subject'/>
          <ErrorMessage name='subject'/>
          
          <Field as="textarea" name="message" rows="4" cols="40"/>
          <ErrorMessage name='message'/>

          <button type='submit'>Submit</button>
        </Form>
        </Formik>
      </div>

      <div className='social'>


      </div>
      </div>
    </div>
    </div>
  )
}

export default Contact