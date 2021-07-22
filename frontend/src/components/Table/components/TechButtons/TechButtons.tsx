import React from 'react';

import './TechButtons.scss';

import Button from '@material-ui/core/Button';

type TechButtonsProps = {
  onCalc: () => void;
  onSave: () => void;
  onGet: () => void;
  disabled: boolean;
};

export const TechButtons: React.FC<TechButtonsProps> = ({
  onCalc,
  onSave,
  onGet,
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
        onClick={onSave}
        disabled={disabled}
      >
        Save
      </Button>
      <Button
        variant="outlined"
        color="default"
        className="TechButtons__button TechButtons__button_get"
        onClick={onGet}
      >
        Get from DB
      </Button>
    </div>
  );
};
