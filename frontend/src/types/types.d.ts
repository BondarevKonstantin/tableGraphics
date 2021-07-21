type RetentionDate = {
  registrationDate: Date | null;
  lastActivityDate: Date | null;
};

type LifeDurationData = {
  lifeDays: number,
  total: number,
}

type RetentionDateField = 'registrationDate' | 'lastActivityDate'

type AppReducerState = {
  dataArray: RetentionDate[]
    calculationsDisplayed: boolean
  };

type AppState = {
    appReducer: AppReducerState;
  };