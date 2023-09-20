import React from 'react';
import { Button as AntButton } from 'antd';

const IconButton = ({ icon, iconPosition, label, onClick }) => {
  if (iconPosition === 'left') {
    return (
      <AntButton size='large' type="primary" icon={icon} onClick={onClick}>
        {label}
      </AntButton>
    );
  } else if (iconPosition === 'right') {
    return (
      <AntButton size='large' type="primary" onClick={onClick}>
        {label}
        {icon}
      </AntButton>
    );
  } else {
    return null;
  }
};

export default IconButton;
