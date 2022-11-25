import { component$, useRef } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import './style.css';
import QwikTextField from '~/components/QwikTextField'; 

export default component$(() => {

  const username = useRef();
  const password = useRef();

  return (
    <div className='container'>
      <div className='input'>
        <QwikTextField name='Username' reference={username}/>
      </div>
      <div className='input'>
        <QwikTextField name='Password' reference={password}/>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Login',
};
