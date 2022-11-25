/** @jsxImportSource react */

import { qwikify$ } from '@builder.io/qwik-react';
import { Alert, Button, Slider, TextField, Box } from '@mui/material';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa/index';
import { BsPeopleFill } from 'react-icons/bs/index';
import { IoMdMan } from 'react-icons/io/index';

export const MUIButton = qwikify$(Button);
export const MUIAlert = qwikify$(Alert);
export const MUISlider = qwikify$(Slider, { eagerness: 'hover' });
export const MUITextField = qwikify$(TextField);
export const MUIBox = qwikify$(Box);
export const UserIcon = qwikify$(FaUser);
export const LockIcon = qwikify$(FaLock);
export const EnvelopeIcon = qwikify$(FaEnvelope);
export const PeopleIcon = qwikify$(BsPeopleFill);
export const ManIcon = qwikify$(IoMdMan);