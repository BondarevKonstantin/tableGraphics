import React from 'react';
import './TechButtons.scss';

import Button from '@material-ui/core/Button';

type TechButtonsProps = {};

export const TechButtons: React.FC<TechButtonsProps> = ({}) => {
  return (
    <div className="TechButtons">
      <Button
        variant="outlined"
        color="primary"
        className="TechButtons__button TechButtons__button_calculate"
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
