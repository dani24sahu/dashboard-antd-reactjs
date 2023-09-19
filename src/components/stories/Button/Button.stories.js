import Button from './Button';

// Defining the default export with the component and title properties
export default {
  component: Button,
  title: 'Button',
};

// Defining a story with the name Default and some args
export const Default = {
  args: {
    label: 'Default Button',
    type: 'default',
    size: 'middle',
    shape: null,
    icon: null,
    onClick: () => alert('Clicked'),
  },
};

// Defining another story with the name Primary and some args
export const Primary = {
  args: {
    label: 'Primary Button',
    type: 'primary',
    color: 'blue',
    size: 'lg',
    shape: 'round',
    icon: null,
    onClick: () => alert('Clicked'),
  },
};

export const Secondary = {
    args: {
      label: 'Secondary Button',
      type: 'secondary',
      size: 'large',
      color: 'silver',
      shape: 'round',
      icon: null,
      onClick: () => alert('Clicked'),
    },
}

export const Success = {
    args: {
        label: 'Save Button',
        type: 'success',
        size: 'lg',
        color: 'green',
        shape: 'round',
        onClick: () => alert('Saved'),
    }
}

export const Danger = {
    args: {
        label: 'Danger Button',
        type: 'delete',
        size: 'lg',
        color: 'red',
        shape: 'round',
        onClick: () => alert('deleted'),
    }
}
