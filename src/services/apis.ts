import {Axios} from '../axios/index';

export const getUsersListApi = async (pageNumber: number) => {
  try {
    const response: any = await Axios.get(`users?page=${pageNumber || 1}`);
    if (response?.data) {
      return response?.data;
    } else {
      throw response?.data;
    }
  } catch (err) {
    throw err;
  }
};
