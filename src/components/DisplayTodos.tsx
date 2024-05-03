import React, { useEffect } from "react";
import Todo from "./TodosModel/TodosModel";

import SingleTodo from "./SingleTodo/SingleTodo"


interface Props {
    searchString : string
    dataFromDB : Todo[]
    setDataFromDB : React.Dispatch<React.SetStateAction<Todo[]>>
    isDeleteButtonClicked : boolean
    setIsDeleteButtonClicked : React.Dispatch<React.SetStateAction<boolean>>
    isSaveButtonClicked : boolean
    setIsSaveButtonClicked : React.Dispatch<React.SetStateAction<boolean>>
}

const Display : React.FC<Props> = ({searchString, dataFromDB, setDataFromDB,isDeleteButtonClicked, setIsDeleteButtonClicked, isSaveButtonClicked, setIsSaveButtonClicked}) => {

    useEffect(()=>{
        fetchData()
    },[])

    useEffect(()=>{
       
       
       if (searchString.length > 0 ) {
            searchTask()
       } else if (isSaveButtonClicked === true ){
            fetchData()
       } 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ isSaveButtonClicked, searchString])


    const fetchData = async() => {
        try {
            const response = await fetch(`http://localhost:5000/todo`)

            if (!response.ok){
                throw new Error ("cant fetch data")
            }
            
            const data= await response.json()
            setDataFromDB(data)
            
            setIsSaveButtonClicked(false)
          
        } catch (error) {
            console.log(error)
        }
        
    }

    const searchTask = async() => {
        console.log("search task")

        try {
            const response = await fetch(`http://localhost:5000/todo/${searchString}`)

            if (!response.ok) {
                throw new Error ("cant find the task")
            }

            const data = await response.json()

            setDataFromDB(data)
        } catch (error) {
            console.log(error)
        }
    }

    const displayAllTodos = () => {
     
        return (
            dataFromDB.map((each,index) => <SingleTodo data={each} key={index} _id={each._id} setDataFromDB={setDataFromDB} setIsDeleteButtonClicked={setIsDeleteButtonClicked}></SingleTodo>)
        )
    }

    return ( 
        <div className="display-container">{dataFromDB.length > 1 && displayAllTodos()}</div>
     );
}
 
export default Display; 