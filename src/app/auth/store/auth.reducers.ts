import * as AuthActions from './auth.actions';

export interface State {
  token: string;
  authenticted: boolean;
}

const initialState: State = {
  token: null,
  authenticted: false
}

export function AuthReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case (AuthActions.SIGNUP):
    case (AuthActions.SIGNIN):
      return {
        ...state,
        authenticted: true
      }
    case (AuthActions.LOGOUT):
      return {
        ...state,
        token: null,
        authenticted: false
      }
    default:
      return state;
  }
}
