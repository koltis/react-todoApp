import React from 'react';

export const Item = ({ i }) => {
  return (
    <>
      {i.src ? (
        <img src={i.src} alt={i.src} />
      ) : (
        <img
          src={
            'https://preview.redd.it/ok8woyewix121.jpg?auto=webp&s=49f79840f0d2c999be14c101d50f198d51ab0a60'
          }
          alt={
            'https://preview.redd.it/ok8woyewix121.jpg?auto=webp&s=49f79840f0d2c999be14c101d50f198d51ab0a60'
          }
        />
      )}
      <div className="textList">
        {i.tarea ? <h3>{i.tarea}</h3> : <h3>Empty tarea Name</h3>}
        <div className="redLine" />
        {i.descripcion ? <p>{i.descripcion}</p> : <p>Empty Description</p>}
      </div>
    </>
  );
};
