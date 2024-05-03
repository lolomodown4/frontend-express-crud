import React, { useEffect, useState} from 'react';
import './App.css';

import Title from "./components/Title"
import Search from "./components/Search"
import Display from './components/DisplayTodos';

import Modal from './components/Modal/Modal';

import Todo from "./components/TodosModel/TodosModel"

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [dataFromDB, setDataFromDB] = useState<Todo[]>([])

  const [isSaveButtonClicked, setIsSaveButtonClicked] = useState<boolean>(false)
  const [isDeleteButtonClicked, setIsDeleteButtonClicked] = useState<boolean>(false)

  const [searchString, setSearchString] = useState<string>("")


  return (
    <div className="App">
      <Title/>
      
      <Search setIsModalOpen={setIsModalOpen} setSearchString={setSearchString}/>

      <Display 
        searchString={searchString}
        dataFromDB={dataFromDB} 
        setDataFromDB={setDataFromDB} 
        isDeleteButtonClicked={isDeleteButtonClicked} 
        setIsDeleteButtonClicked={setIsDeleteButtonClicked} 
        isSaveButtonClicked={isSaveButtonClicked} 
        setIsSaveButtonClicked={setIsSaveButtonClicked}
      />

      {isModalOpen &&
        <Modal 
          setIsModalOpen={setIsModalOpen} 
          setIsSaveButtonClicked={setIsSaveButtonClicked}/>
      }
    </div>
  );
}

export default App;
