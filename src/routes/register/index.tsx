import { component$, useRef, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import QwikTextField from '~/components/QwikTextField';
import { MUIAlert } from '~/integrations/react/mui';
import './style.css';

export default component$(() => {

  const state = useStore({
    severity: 'error',
    message: 'Error Message',
    showMessage: false
  });

  const username = useRef();
  const password = useRef();
  const firstName = useRef();
  const lastName = useRef();
  const confirmPassword = useRef();
  const email = useRef();
  
  return (
    <>
    <div className='container'>
      <div className='input'>
        <QwikTextField name='First Name' reference={firstName}/>
      </div>
      <div className='input'>
        <QwikTextField name='Last Name' reference={lastName}/>
      </div>
      <div className='input'>
        <QwikTextField name='Email' reference={email}/>
      </div>
      <div className='input'>
        <QwikTextField name='Username' reference={username}/>
      </div>
      <div className='input'>
        <QwikTextField name='Password' reference={password}/>
      </div>
      <div className='input'>
        <QwikTextField name='Confirm Password' reference={confirmPassword}/>
      </div>
      <button class='button' onClick$={() => {
        if (password.current?.value !== confirmPassword.current?.value) {
          console.log('Password do not match');
        }
      }} >Sign Up</button>
    </div>
    {state.showMessage ? (<MUIAlert severity={`${state.severity}`}>{`${state.message}`}</MUIAlert>) : ''}
    </>
);
});

export const head: DocumentHead = {
  title: 'Register',
};
