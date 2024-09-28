import * as Yup from 'yup';

const loginschema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    

    password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password cannot be more than 20 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is required'),
});

const signUpschema = Yup.object({
    name: Yup.string().required(' Name is Required'),
    
   
    email: Yup.string().email('Invalid email address').required('Email is Required'),
   
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password cannot be more than 20 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is required'),
  
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirm Password is Required'),
});

const resetpassword= Yup.object({
    
   
    password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password cannot be more than 20 characters')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one special character')
    .required('Password is required'),
  
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
        .required('Confirm Password is Required'),
});

const resetEmail=Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is Required'),

      
});
const bankdetails=Yup.object({
    
    Bankname: Yup.string().required('Bank Name is Required'),    
    name: Yup.string().required(' Account Holders name is Required'),    
    AccountNumber: Yup.string().required(' Account Number is Required'),    
    ReAccountNumber: Yup.string().required(' Re-enter Account Number is Required'), 
    
});


export{
    loginschema,signUpschema,resetpassword,resetEmail,bankdetails
}