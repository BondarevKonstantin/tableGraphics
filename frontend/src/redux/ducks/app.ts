import axios from 'axios'

import { Reducer, ActionCreator } from 'redux';

enum AppActionTypes {
    SET_CALCULATIONS_DISPLAYED = 'app/SET_CALCULATIONS_DISPLAYED',
    SET_DATA_ARRAY = 'app/SET_DATA_ARRAY',
    LIST_USER_DATES = 'app/LIST_USER_DATES',
    LIST_USER_DATES_FAIL = 'app/LIST_USER_DATES_FAIL',
}

const initialState: AppReducerState = {
  dataArray: null as any,
  calculationsDisplayed: false,
  error: false,
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

export const listUserDates = () => async (dispatch: any) => {
  console.log(3)
  const data = await axios.get("/api/userDates")

  console.log(data)

  if (data) {
    dispatch({
      type: AppActionTypes.SET_DATA_ARRAY,
      payload: data,
    })
  } else {
    dispatch({
      type: AppActionTypes.LIST_USER_DATES_FAIL
    })
  }
}

export const postUserDates = (dateArray: any) => async (dispatch: any) => {
  
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  }

  
  const data = await axios.post("/api/userDates", dateArray, config)

  if (data) {
    console.log(data)
  }
}


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
        dataArray: action.payload,
        error: false
      };
    default:
      return state;
  }
};
