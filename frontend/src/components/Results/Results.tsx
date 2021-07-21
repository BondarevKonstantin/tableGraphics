import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './Results.scss';

type ResultsProps = {};

export const Results: React.FC<ResultsProps> = ({}) => {
  const { calculationsDisplayed } = useSelector(
    (state: AppState) => state.appReducer
  );

  return (
    <div className={`Results Results-displayed--${calculationsDisplayed}`}>
      <div className="Results-info Results-rolling-retention"></div>

      <div className="Results-info Results-life-gystogramm"></div>
    </div>
  );
};
