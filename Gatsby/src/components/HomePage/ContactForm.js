import React, { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { contactValidationSchema } from '../../utils/contactValidationSchema';
import MsgSnackbar from './MsgSnackbar';

const ContactForm = function () {
  const [formspreeState, formspreeHandleSubmit] = useForm('contact');
  const [msgSuccess, setMsgSuccess] = useState(null);
  const [pageLoaded, setPageLoaded] = useState(false);
  const msgResetDelay = 5;

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  useEffect(() => {
    if (formspreeState.succeeded) {
      setMsgSuccess(true);
    }
    if (formspreeState.errors.length !== 0) {
      setMsgSuccess(false);
    }

    // reset msg state after certain time
    const timer = setTimeout(() => {
      setMsgSuccess(null);
    }, msgResetDelay * 1000);

    return () => {
      clearTimeout(timer);
    };
    // formspreeState is an array (an object) - new one on each render
  }, [formspreeState.errors, formspreeState.succeeded]);

  return (
    <>
      {pageLoaded && <MsgSnackbar msgSuccess={msgSuccess} />}

      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        validationSchema={contactValidationSchema}
        onSubmit={(values, { resetForm }) => {
          formspreeHandleSubmit(values);
          resetForm();
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" type="text" />
          <small>
            <ErrorMessage name="name" />
          </small>

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />
          <small>
            <ErrorMessage name="email" />
          </small>
          <label htmlFor="message">Message</label>
          <Field id="message" name="message" type="text" as="textarea" />
          <small>
            <ErrorMessage name="message" />
          </small>
          <button
            type="submit"
            disabled={formspreeState.submitting}
            data-content={formspreeState.submitting ? 'Sending...' : 'Send'}
            style={{ display: 'block' }}
          >
            {formspreeState.submitting ? 'Sending...' : 'Send'}
          </button>
        </Form>
      </Formik>
    </>
  );
};
export default ContactForm;
