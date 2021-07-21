import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './TechButtons.scss';

import Button from '@material-ui/core/Button';

import { setCalculationsDisplayed } from '../../../../redux/ducks/app';

type TechButtonsProps = {};

export const TechButtons: React.FC<TechButtonsProps> = ({}) => {
  const dispatch = useDispatch();

  return (
    <div className="TechButtons">
      <Button
        variant="outlined"
        color="primary"
        className="TechButtons__button TechButtons__button_calculate"
        onClick={() => dispatch(setCalculationsDisplayed(true))}
      >
        Calculate
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        className="TechButtons__button TechButtons__button_save"
      >
        Save
      </Button>
    </div>
  );
};
