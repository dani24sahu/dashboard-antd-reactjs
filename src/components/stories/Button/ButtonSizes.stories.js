import Button from './Button';

export default {
  component: Button,
  title: 'Buttons/Size',
};

export const Small = {
  args: {
    label: 'Small Button',
    type: 'primary',
    size: 'small', 
    shape: null,
    icon: null,
    onClick: () => alert('Clicked'),
  },
};

export const Medium = {
  args: {
    label: 'Medium Button',
    type: 'primary',
    size: 'middle', 
    shape: null,
    icon: null,
    onClick: () => alert('Clicked'),
  },
};

export const Large = {
  args: {
    label: 'Large Button',
    type: 'primary',
    size: 'large', 
    shape: null,
    icon: null,
    onClick: () => alert('Clicked'),
  },
};

