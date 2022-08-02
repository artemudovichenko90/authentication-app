import * as Yup from 'yup';

export const SCHEMA_NAME = Yup.string().matches(/^[A-Z][a-z]{1,20}$/, 'Incorrect name').required('Required field');

export const SCHEMA_EMAIL = Yup.string().email('Incorrect email').required('Required field');

export const SCHEMA_PASSWORD = Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,36}$/, 'Incorrect password').required('Required field')

export const SCHEMA_SIGN_UP = Yup.object({
  firstName: SCHEMA_NAME,
  lastName: SCHEMA_NAME,
  displayName: SCHEMA_NAME,
  email: SCHEMA_EMAIL,
  password: SCHEMA_PASSWORD,
  passwordConfirm: Yup.string().oneOf([Yup.ref('password')],'Password not equel'),
  join: Yup.string().required()
})

export const SCHEMA_LOGIN = Yup.object({
  email: SCHEMA_EMAIL,
  password: SCHEMA_PASSWORD,
})