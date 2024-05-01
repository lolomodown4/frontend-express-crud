import React, {useState} from 'react';
import './App.css';

import Title from "./components/Title"
import Search from "./components/Search"
import Display from './components/DisplayTodos';

import Modal from './components/Modal/Modal';

import Todo from "./components/TodosModel/TodosModel"

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [dataFromDB, setDataFromDB] = useState<Todo[]>([])

  return (
    <div className="App">
      <Title/>
      <Search setIsModalOpen={setIsModalOpen}/>
      <Display dataFromDB={dataFromDB} setDataFromDB={setDataFromDB} isModalOpen={isModalOpen}/>

      {isModalOpen ? <Modal setIsModalOpen={setIsModalOpen}/> : ""}
    </div>
  );
}

export default App;
