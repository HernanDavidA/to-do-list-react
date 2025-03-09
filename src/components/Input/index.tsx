import React, {  useEffect, useState } from "react";

type Props = {
  onAddToDo: (todo: string) => void;
  editingTodo: {index: number; text: string} | null;
}

const index = ({onAddToDo, editingTodo}: Props) => {

    const [ inputValue , setInputValue]= useState("");

    useEffect(()=> {
      if(editingTodo){
        setInputValue(editingTodo.text);
      }
    }, [editingTodo]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onAddToDo(inputValue);
        setInputValue("");
    }
  return (
    <form className="form-inline flex" onSubmit={handleSubmit}>
    <input type="text" value={inputValue} className="form-control" onChange={(e) => setInputValue(e.target.value)} placeholder="Escribe aquí lo que quieras hacer" />
    <button type="submit" className="btn btn-primary">
        {editingTodo ? "Guardar" : "Añadir"}
    </button>
    </form>
  )
}

export default index