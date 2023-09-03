import React from 'react';

const Alert = ({ color, msg }) => {
  return (
    <div className={`alert-box ${color}`}>
      {msg}
    </div>
  );
}

export default Alert;
