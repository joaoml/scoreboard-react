import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';


export default {
  title: 'Button',
  component: Button
};

const baseData = {
  label: "test",
  handleClick: action("clicked")
}

export const Default = () => <Button {...baseData} />;

const secondaryData = {
  ...baseData,
  kind: 'secondary'
}
export const secondary = () => <Button {...secondaryData} />;

const disabledData = {
  ...baseData,
  disabled: true
}
export const disabled = () => <Button {...disabledData} />;

const secondaryDisableData = {
  ...secondaryData,
  ...disabledData
}
export const secondaryDisabled = () => <Button {...secondaryDisableData} />;