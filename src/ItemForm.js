import React, { useState, useEffect } from 'react';
import * as SC from './form.style.js';
export const ItemForm = ({ defaultValue = '', submitMethod }) => {
  const [inputControl, setInputControl] = useState({
    src: '',
    tarea: '',
    descripcion: '',
  });

  useEffect(() => {
    if (defaultValue) {
      setInputControl((PrevInputControl) => defaultValue);
    }
  }, [defaultValue]);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setInputControl((PrevInputControl) => ({
      ...PrevInputControl,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitMethod(inputControl);
  };

  return (
    <SC.styledForm>
      <form onSubmit={handleSubmit}>
        <div className="stetic"></div>
        <legend>Modify Item: {inputControl.tarea || ''}</legend>
        <label>
          Tarea:
          <input
            id="tarea"
            type="text"
            placeholder={inputControl.tarea || ''}
            value={inputControl.tarea || ''}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label>
          Imagen:
          <input
            id="src"
            type="text"
            placeholder={inputControl.src || ''}
            value={inputControl.src || ''}
            onChange={(event) => handleChange(event)}
          />
        </label>
        <label>
          Descripcion:
          <textarea
            id="descripcion"
            placeholder={inputControl.descripcion || ''}
            value={inputControl.descripcion || ''}
            onChange={(event) => handleChange(event)}
            className="descriptionInput"
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </SC.styledForm>
  );
};
