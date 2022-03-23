import { useEffect, useState } from 'react';
import './App.scss'
import { Header } from './components/Header/Header';
import { TegList } from './components/TegList/TegList';
import { TodoList } from './components/TodoList/TodoList';

const App = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tegArr, setArrTags] = useState([]);
  const [inputTeg, setInputTeg] = useState('');


  // const findTeg = () => {
  //   todos.map(todo => {
  //     if(todo.name.match(/#\w+/)) {
  //       console.log(todo.name.match(/#\w+/)[0])
  //     }
  //   })
  // }

  // useEffect(() => {
  //   findTeg()
  // }, [todos])
  
  const changeName = (e) => {
    setName(e.target.value)
  }

  const changeDescr = (e) => {
    setDescription(e.target.value);
  }

  const changeTeg = (e) => {
    setInputTeg(e.target.value)
  }


  const setEdit = (e) => {
    e.preventDefault();
    isEdit ? setIsEdit(false) : setIsEdit(true)
  }

  const randomFunc = (max) => {
    return Math.floor(Math.random() * max)
  }

  const addNewTeg = (e) => {
    e.preventDefault();

    const newTeg = {
      tegName: inputTeg,
      id: randomFunc(50000)
    }

    if(inputTeg.trim() === '') return

    setArrTags([newTeg, ...tegArr]);
    setInputTeg('');
  }

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      name: name, 
      description: description,
      id: randomFunc(10000),
      pos: 1
    }

    if(name.trim() === '' || description.trim() === '') return

    setTodos([newTodo, ...todos]);
    setName('');
    setDescription('');
  }

  const removeTodo = (id) => {
    setTodos(
      todos.filter(item => {
        return item.id !== id
      })
    )
  }

  const removeTeg = (id) => {
    setArrTags(tegArr.filter(teg => {
      return teg.id !== id
    }))
  }

  return (
    <div className="App">
      <Header 
        changeName={changeName} 
        changeDescr={changeDescr}
        name={name} 
        addTask={addTodo} 
        description={description}
        changeTeg={changeTeg}
        inputTeg={inputTeg}
        addNewTeg={addNewTeg}
      />
       <TegList 
        tegArr={tegArr}
        removeTeg={removeTeg}
      />
      <TodoList 
        edit={isEdit}
        setEdit={setEdit}
        todos={todos} 
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
