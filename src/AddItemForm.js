import React from 'react';
import { ItemForm } from './ItemForm';
export const AddItemForm = ({ addItem }) => {
  return <ItemForm submitMethod={addItem} />;
};
