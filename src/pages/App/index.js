import React, { useState, useEffect } from 'react';
import './App.css';
import { FormControl, Button, Input, InputLabel } from '@material-ui/core';
import db from '../../firebase';
import firebase from 'firebase';

import Todo from '../../components/Todo'

function App() {
  const [todos, setTodos] = useState([]); 
  const [ input, setInput ] = useState('');

  // Яаж firebase-аас мэдээлэл оруулж ирэх вэ
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })

    setTodos([...todos, input]); 
    setInput('');
  };

  return (
    <div className="app">
      <h1>Юу хийх үү? Web App 🚀</h1>
      <form action="">

        <FormControl>
          <InputLabel>👉Ажлаа бичээрэй</InputLabel>
          <Input type="text" value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} onClick={addTodo} type='submit' variant="contained" color="primary">
          Ажил нэмэх
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo}/>
        ))}
      </ul>

    </div>
  );
}

export default App;
