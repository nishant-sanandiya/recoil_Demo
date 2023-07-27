import {atom} from 'recoil';
import {UsersAtomType} from './types';

const initUsersAtom: UsersAtomType = {
  usersList: [],
};

export const usersAtom = atom({
  key: 'usersState',
  default: {
    ...initUsersAtom,
  },
});
