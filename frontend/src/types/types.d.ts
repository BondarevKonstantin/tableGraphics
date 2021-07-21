type RetentionDate = {
  registrationDate: Date | null;
  lastActivityDate: Date | null;
};

type AppReducerState = {
  dataArray: RetentionDate[]
    calculationsDisplayed: boolean
  };

type AppState = {
    appReducer: AppReducerState;
  };