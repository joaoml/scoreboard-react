import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import { ButtonKindEnum } from './ButtonKindEnum';
import { ButtonLevelEnum } from './ButtonLevelEnum';


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
  kind: ButtonKindEnum.SECONDARY
}
export const Secondary = () => <Button {...secondaryData} />;

const disabledData = {
  ...baseData,
  disabled: true
}
export const Disabled = () => <Button {...disabledData} />;

const secondaryDisableData = {
  ...secondaryData,
  ...disabledData
}
export const SecondaryDisabled = () => <Button {...secondaryDisableData} />;

const unstyledData = {
  ...baseData,
  kind: ButtonKindEnum.UNSTYLED
}
export const Unstyled = () => <Button {...unstyledData} />;

const unstyledDangerData = {
  ...baseData,
  kind: ButtonKindEnum.UNSTYLED,
  level: ButtonLevelEnum.DANGER
}
export const UnstyledDanger = () => <Button {...unstyledDangerData} />;
