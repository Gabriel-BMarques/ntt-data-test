import React from 'react';
import '@ui5/webcomponents/dist/Button';

function Button({ children, onClick, disabled }) {
  return (
    <ui5-button onClick={onClick} disabled={disabled}>{children}</ui5-button>
  );
}

export default Button;
