import React, { useState, ChangeEvent } from 'react';
import { Input, Label, Switch } from './styles';

interface props {
  value?: boolean;
  onLabel: string;
  offLabel: string;
}

const ToggleSwitch = ({ value = true, onLabel, offLabel }: props) => {
  const [checked, setChecked] = useState(value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <Label>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
      <span>{checked ? onLabel : offLabel}</span>
    </Label>
  );
};

export default ToggleSwitch;
