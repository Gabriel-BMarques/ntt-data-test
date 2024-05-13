import React from 'react';
import '@ui5/webcomponents/dist/Button';

function Button({ children, onClick }) {
  return (
    <ui5-button onClick={onClick}>{children}</ui5-button>
  );
}

export default Button;
