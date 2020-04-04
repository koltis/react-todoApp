import React, { useState, useEffect } from 'react';
export const useLocalStorage = (List) => {
  const saveItems = (items) => {
    localStorage.setItem('list', JSON.stringify(items));
  };

  if (!localStorage.getItem('DefaultList')) {
    console.log(localStorage.getItem('DefaultList'));
    saveItems(List);
    localStorage.setItem('DefaultList', 'no');
  }

  const [list, setList] = useState(JSON.parse(localStorage.getItem('list')));

  const modifyItem = (item) => {
    setList((prevState) => {
      const newList = prevState.map((j) => {
        if (j.id === item.id) {
          return item;
        }
        return j;
      });
      saveItems(newList);
      return newList;
    });
  };

  const removeItem = (item) => {
    setList((prevState) => {
      const newList = prevState.filter((k) => k.id !== item.id);
      saveItems(newList);
      setList(newList);
    });
  };

  const addItem = (item) => {
    setList((prevState) => {
      console.log(new Date().getTime());
      item.id = new Date().getTime();
      const newList = [...prevState, item];
      saveItems(newList);
      setList(newList);
    });
  };

  return { list, setList, modifyItem, removeItem, addItem };
};
