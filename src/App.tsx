import List from './components/List'
import Input from './components/Input'


import './App.css'
import { useState } from 'react'

function App() {
  const [data, setData ] = useState<string[]>([])
  const [editingTodo, setEditingTodo] = useState<{ index: number; text: string } | null>(null);


  const addTodo = (todo: string) => {
    if(todo.trim()){

      if(editingTodo !== null){
        const updateTodo = [...data];
        updateTodo[editingTodo.index] = todo;
        setData(updateTodo);
        setEditingTodo(null);
      } else{
        setData([...data, todo])
      }
      
      }
  }

  const removeTodo = (index: number) => {
    setData(data.filter((_, i) => i !== index))
  }

  const editTodo = (index: number) => {
    setEditingTodo({index, text: data[index]});
  }

  return (
    <>
      <h1>To Do List</h1>
      <Input onAddToDo={addTodo} editingTodo={editingTodo}></Input>
      
      <List data={data} onRemoveTodo={removeTodo} onEditTodo={editTodo}></List>
    </>
  )
}

export default App
