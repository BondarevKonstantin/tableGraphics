import { Reducer, ActionCreator } from 'redux';
import { AppDispatch } from '../rootReducer';

enum AppActionTypes {
    SET_CALCULATIONS_DISPLAYED = 'app/SET_CALCULATIONS_DISPLAYED',
}

const initialState: AppReducerState = {
  calculationsDisplayed: false
};

type setCalculationsDisplayedAction = {
  type: AppActionTypes.SET_CALCULATIONS_DISPLAYED;
  payload: boolean;
};

export const setCalculationsDisplayed: ActionCreator<setCalculationsDisplayedAction> = (
  payload: boolean
) => ({
  type: AppActionTypes.SET_CALCULATIONS_DISPLAYED,
  payload,
});

type AppActions = setCalculationsDisplayedAction;

export const appReducer: Reducer<AppReducerState, AppActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AppActionTypes.SET_CALCULATIONS_DISPLAYED:
      return {
        ...state,
        calculationsDisplayed: action.payload,
      };
    default:
      return state;
  }
};
