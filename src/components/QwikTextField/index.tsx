import { component$, Ref, useStore } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import './style.css';
import { UserIcon, EnvelopeIcon, LockIcon, PeopleIcon, ManIcon } from '~/integrations/react/mui';
import { Man } from '@mui/icons-material';

interface TextfieldProps {
    name: String;
    reference: Ref<Element>;
}

export default component$((props: TextfieldProps) => {

    const state = useStore({
        value: '',
        showPlaceholder: true,
        isValid: true
    });

    const passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    const emailReg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  return (
    <div className='textfield' id='textfield'>
        <input ref={props.reference} onInput$={()=> {
            state.value = props.reference.current?.value;
        }} onFocus$={() => state.showPlaceholder = true} onFocusout$={() => {
            if (state.value.length > 0) {
                state.showPlaceholder = false;
            }
        }} className={props.name === 'Username' || props.name === 'First Name' || props.name === 'Last Name' ? (state.value.length === 0 ? ('') : (state.value.length > 3 ? 'valid' : 'invalid')) : 
        (props.name === 'Email' ? (state.value.length > 0 ? (state.value.match(emailReg) ? 'valid' : 'invalid') : '') : (state.value.length > 0 ? (state.value.match(passwordReg) ? 'valid' : 'invalid') : ('')))}/>
        <span>{props.name === 'Username' ? (<UserIcon />) : (props.name === 'First Name' ? (<ManIcon />) : 
        (props.name === 'Last Name' ? (<PeopleIcon />) : props.name === 'Password' || props.name === 'Confirm Password' ? (<LockIcon />) :
        (<EnvelopeIcon />)))}</span>
        {state.showPlaceholder ? (<label for='textfield'>{`${props.name}`}</label>) : (<div></div>)}
        <div className='underline'></div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Login',
};
