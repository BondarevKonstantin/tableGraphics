import { combineReducers, AnyAction } from 'redux';

import { appReducer } from './ducks/app';

import { ThunkDispatch } from 'redux-thunk';


export type AppDispatch = ThunkDispatch<AppState, any, AnyAction>;

const rootReducer = combineReducers<AppState>({
  appReducer: appReducer,
});

export { rootReducer };
