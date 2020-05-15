import React from 'react';
import { action } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/react';
import Button from './Button';


export default {
  title: 'Button',
  component: Button
};

const withTextData = {
  label: "test",
  handleClick: action("clicked")
}

export const WithText = () => <Button {...withTextData}/>;

const isDisabledData = {
  label: "test",
  handleClick: action("clicked"),
  isDisabled: true
}
export const disabled = () => <Button {...isDisabledData}/>;