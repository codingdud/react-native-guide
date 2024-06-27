import * as yup from 'yup';
import {validateLen,validateEmailOrPhoneNumber} from './validationFun';

export const userSchema = yup.object().shape({
    username: yup
    .string()
    //.test('validEmailOrPhone','Invalid email or phone number',validateEmailOrPhoneNumber)
    .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
        .test('len', 'Password must be at least 4 characters', validateLen),
});