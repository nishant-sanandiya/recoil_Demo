import {selector, selectorFamily} from 'recoil';
import {usersAtom} from './usersAtom';
import {getUsersListApi} from '../../services/apis';

export const userListValue = selector({
  key: 'userListValue',
  get: ({get}) => {
    const auth = get(usersAtom);
    return auth.usersList;
  },
});

export const getUserListSelectorWithoutParams = selector({
  key: 'getUserListSelectorWithoutParams',
  get: async () => {
    try {
      const response = await getUsersListApi(1);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});

export const getUserListSelector = selectorFamily({
  key: 'getUserListSelector',
  get: (pageNumber: number) => async () => {
    try {
      const response = await getUsersListApi(pageNumber);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
});
