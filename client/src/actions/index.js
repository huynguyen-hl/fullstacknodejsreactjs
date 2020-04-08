import axios from 'axios';
import { FETCH_USER } from './types';

const fetchUser = () => {
  return function (dispatch) {
    axios.get('/api/user').then((result) =>
      dispatch({
        type: FETCH_USER,
        payload: result,
      }),
    );
  };
};
