import React from 'react';

function Header({ title, number }) {

  return (
    <div className="Header">
      <h1>{title}</h1>
      <p>Numero: {number} </p>
    </div>
  );
}

export default Header;
