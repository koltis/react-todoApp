import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { TodoList } from './todoList';
import { AddItemForm } from './AddItemForm';
import { ModifyTodolist } from './ModifyTodoList';
import { ModifyItemForm } from './ModifyItemForm';
import { useLocalStorage } from './useLocalStorage';
export const Routes = () => {
  const [currentItem, setCurrentItem] = useState('');
  const { list, setList, removeItem, modifyItem, addItem } = useLocalStorage([
    {
      id: 0,
      tarea: 'limpiar el cuarto',
      descripcion: 'limpiar el cuarto DXXD K MAS VA A SER',
      src: 'https://pbs.twimg.com/media/CusI6zzWAAAeKgf.jpg',
    },
    {
      id: 1,
      tarea: 'programar',
      descripcion: 'realizar algun programa o algo ni soy 100tifico',
      src:
        'https://www.lavanguardia.com/r/GODO/LV/p6/WebSite/2019/06/05/Recortada/img_djuarez_20190523-101810_imagenes_lv_otras_fuentes_istock-995439834-kwhB-U462696988324c8G-992x558@LaVanguardia-Web.jpg',
    },
    {
      id: 2,
      tarea: 'cocinar',
      descripcion: 'hacer la comida mas chida del mes',
      src:
        'https://ep01.epimg.net/elpais/imagenes/2019/02/19/buenavida/1550598000_675479_1550599889_noticia_normal.jpg',
    },
    {
      id: 3,
      tarea: 'crear la todoApp',
      descripcion:
        'crear la mejor todoApp k existe o eso creo almenos mi vs con esta custom se ve genial',
      src:
        'https://www.marindelafuente.com.ar/wp-content/uploads/2019/08/clausulas-de-guarda-programacion.jpg',
    },
  ]);
  return (
    <Switch>
      <Route exact path="/">
        <TodoList list={list} />
      </Route>
      <Route path="/addItem">
        <AddItemForm addItem={addItem} />
      </Route>
      <Route path="/ModifyList">
        <ModifyTodolist
          list={list}
          removeItem={removeItem}
          setCurrentItem={setCurrentItem}
        />
      </Route>
      <Route path="/ModifyItemForm">
        <ModifyItemForm modifyItem={modifyItem} currentItem={currentItem} />
      </Route>
    </Switch>
  );
};
