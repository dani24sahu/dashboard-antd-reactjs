import React from 'react';
import AgeInput from './AgeInput';

export default {
  title: 'Inputs/AgeInput',
  component: AgeInput,
};

const Template = (args) => <AgeInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Enter your age',
  onChange: (age)=>{console.log(`age is ${age}`)}
};

export const WithValidation = Template.bind({});
WithValidation.args = {
  placeholder: 'Enter your age',
  onChange: (age)=>{
    console.log(`Validated age changed to ${age}`)
  }
};
