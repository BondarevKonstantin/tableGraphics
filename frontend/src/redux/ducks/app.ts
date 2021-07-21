import { Reducer, ActionCreator } from 'redux';
import { AppDispatch } from '../rootReducer';

enum AppActionTypes {
    SET_CALCULATIONS_DISPLAYED = 'app/SET_CALCULATIONS_DISPLAYED',
    SET_DATA_ARRAY = 'app/SET_DATA_ARRAY'
}

const initialState: AppReducerState = {
  dataArray: null as any,
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

type setDataArrayAction = {
  type: AppActionTypes.SET_DATA_ARRAY;
  payload: RetentionDate[]
}

export const setDataArray: ActionCreator<setDataArrayAction> = (payload: RetentionDate[]) => ({
  type: AppActionTypes.SET_DATA_ARRAY,
  payload,
})

type AppActions = setCalculationsDisplayedAction | setDataArrayAction;

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
    case AppActionTypes.SET_DATA_ARRAY:
      return {
        ...state,
        dataArray: action.payload
      }
    default:
      return state;
  }
};
