//atom for authenticate user payload.

import {atom} from 'recoil';
import {AuthAtomType} from './types';

const initAuthAtom: AuthAtomType = {
  token: '',
};

export const authAtom = atom({
  key: 'authState', // unique ID (with respect to other atoms/selectors)
  default: {
    ...initAuthAtom,
  }, // default value (aka initial value)
});
