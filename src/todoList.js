import React, { useState } from 'react';

import * as SC from './App.style.js';
import { Item } from './item.js';

export const TodoList = ({ list }) => {
  return (
    <SC.Lists>
      <h2>Lista de Tareas</h2>
      <ul>
        {list.map((i) => (
          <li key={i.id}>
            <Item i={i} />
          </li>
        ))}
      </ul>
    </SC.Lists>
  );
};
