import React, { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ItemForm } from './ItemForm';

export const ModifyItemForm = ({ modifyItem, currentItem = '' }) => {
  return (
    <>
      <ItemForm submitMethod={modifyItem} defaultValue={currentItem} />
    </>
  );
};
