import React, { ChangeEvent } from 'react';
import { Input, Label, Switch } from './styles';

interface props {
  onLabel: string;
  offLabel: string;
  checked: boolean;
  name: string;
  onChange: (_e: ChangeEvent<HTMLInputElement>) => void;
}

const ToggleSwitch = ({ checked, onLabel, offLabel, onChange, name }: props) => {
  return (
    <Label>
      <Input checked={checked} type="checkbox" onChange={onChange} name={name}/>
      <Switch />
      <span>{checked ? onLabel : offLabel}</span>
    </Label>
  );
};

export default ToggleSwitch;
