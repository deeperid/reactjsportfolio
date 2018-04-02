import { REGISTERED, LOGGED_IN } from '../constants';

let user = {
  email: null
}

export default (state = user, action) => {
  switch (action.type) {
    case REGISTERED:
    case LOGGED_IN:
      return Object.assign({}, state, {
        email: action.email
      });
    default:
      return state;
  }
}
