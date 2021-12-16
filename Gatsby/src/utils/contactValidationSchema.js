import * as yup from 'yup';

export const contactValidationSchema = yup.object({
  name: yup
    .string('Enter your name')
    .strict()
    .min(2, 'Name must be at least 2 characters long')
    .max(50, 'The maximum number of characters is 50')
    .required('Name is required'),
  email: yup
    .string('Enter your email address')
    .strict()
    .email('Enter a valid email')
    .max(50, 'The maximum number of characters is 50')
    .required('Email is required'),
  message: yup
    .string('Enter your message')
    .strict()
    .min(10, 'Message must be at least 10 characters long')
    .max(1000, 'The maximum number of characters is 1000')
    .required('Message is required'),
});
