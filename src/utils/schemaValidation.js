import * as Yup from 'yup';
import CONTSTANTS from './../constants';
const { INPUT_NAMES: { FIRST_NAME, LAST_NAME, DISPLAY_NAME, EMAIL, PASSWORD, PASSWORD_CONFIRM, JOIN_AS } } = CONTSTANTS;

export const SCHEMA_NAME = Yup.string().matches(/^[A-Z][a-z]{1,20}$/, 'Incorrect name').required('Required field');

export const SCHEMA_EMAIL = Yup.string().email('Incorrect email').required('Required field');

export const SCHEMA_PASSWORD = Yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,36}$/, 'Incorrect password').required('Required field')

export const SCHEMA_SIGN_UP = Yup.object({
  [FIRST_NAME]: SCHEMA_NAME,
  [LAST_NAME]: SCHEMA_NAME,
  [DISPLAY_NAME]: SCHEMA_NAME,
  [EMAIL]: SCHEMA_EMAIL,
  [PASSWORD]: SCHEMA_PASSWORD,
  [PASSWORD_CONFIRM]: Yup.string().oneOf([Yup.ref('password')], 'Password not equel'),
  [JOIN_AS]: Yup.string().required()
})

export const SCHEMA_LOGIN = Yup.object({
  [EMAIL]: SCHEMA_EMAIL,
  [PASSWORD]: SCHEMA_PASSWORD,
})