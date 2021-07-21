import React from 'react';

import './TechButtons.scss';

import Button from '@material-ui/core/Button';

type TechButtonsProps = {
  onCalc: () => void;
  disabled: boolean;
};

export const TechButtons: React.FC<TechButtonsProps> = ({
  onCalc,
  disabled,
}) => {
  return (
    <div className="TechButtons">
      <Button
        variant="outlined"
        color="primary"
        className="TechButtons__button TechButtons__button_calculate"
        onClick={onCalc}
        disabled={disabled}
      >
        Calculate
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        className="TechButtons__button TechButtons__button_save"
        disabled={disabled}
      >
        Save
      </Button>
    </div>
  );
};
