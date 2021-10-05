const INITIAL_STATE = {
  user: {},
  access_token: '',
  signed: false,
  loading: false,
  error: '',
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case '@auth/SIGN_IN_SUCCESS':
      return {
        ...state,
        loading: false,
        signed: true,
        user: action.payload,
        access_token: action.payload.access_token,
      };
    case '@auth/SIGN_IN_FAILURE':
      return {
        ...state,
        loading: false,
        signed: false,
        error: action.payload,
      };
    case '@auth/SIGN_OUT':
      return {
        ...state,
        signed: false,
        access_token: '',
      };
    default:
      return state;
  }
}
