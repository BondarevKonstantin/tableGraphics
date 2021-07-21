import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Results.scss';

type ResultsProps = {};

export const Results: React.FC<ResultsProps> = ({}) => {
  const { calculationsDisplayed, dataArray } = useSelector(
    (state: AppState) => state.appReducer
  );

  const sevenDaysRetention = useMemo(() => {}, [dataArray]);

  return (
    <div className={`Results Results-displayed--${calculationsDisplayed}`}>
      <div className="Results-info Results-rolling-retention"></div>

      <div className="Results-info Results-life-gystogramm"></div>
    </div>
  );
};
