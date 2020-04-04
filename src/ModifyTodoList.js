import React from 'react';

import * as SC from './App.style.js';

import { Item } from './item.js';
import { useHistory } from 'react-router-dom';

export const ModifyTodolist = ({ list, removeItem, setCurrentItem }) => {
  const ModifyItem = (i) => {
    setCurrentItem(i);
  };
  let history = useHistory();

  return (
    <SC.Lists>
      <h2>Modifica las tareas</h2>
      <ul>
        {list.map((i) => (
          <li key={i.id}>
            <Item i={i} />
            <div className="buttonContainer">
              <button
                type="button"
                onClick={() => {
                  setCurrentItem((prevCurrentItem) => i);
                  history.push('ModifyItemForm');
                }}
              >
                Modificar
              </button>
              <button
                onClick={() => {
                  removeItem(i);
                }}
                type="button"
              >
                Borrar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </SC.Lists>
  );
};
