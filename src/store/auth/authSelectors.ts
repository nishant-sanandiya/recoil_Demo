// selector for authenticate user token.
// selector use to get specific key from atom state value.

import {selector} from 'recoil';
import {authAtom} from './authAtom';

export const tokenValue = selector({
  key: 'tokenValue',
  get: ({get}) => {
    const auth = get(authAtom);
    return auth.token;
  },
});
