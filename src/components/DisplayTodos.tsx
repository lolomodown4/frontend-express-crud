import React, { useEffect } from "react";
import Todo from "./TodosModel/TodosModel";

import SingleTodo from "./SingleTodo/SingleTodo"

interface Props {
    dataFromDB : Todo[]
    setDataFromDB : React.Dispatch<React.SetStateAction<Todo[]>>
    isModalOpen : Boolean
}

const Display : React.FC<Props> = ({dataFromDB, setDataFromDB, isModalOpen}) => {

    /* maling logic */
    useEffect(()=>{
       if (isModalOpen === false){
        fetchData()
       }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isModalOpen])

    useEffect(()=>{
        console.log(dataFromDB)
    },[dataFromDB])

    const fetchData = async() => {
        try {
            const response = await fetch(`http://localhost:5000/todo`)

            if (!response.ok){
                throw new Error ("cant fetch data")
            }
            
            const data= await response.json()

            setDataFromDB(data)

        } catch (error) {
            console.log(error)
        }
        
    }

    const displayAllTodos = () => {
     
        return (
            dataFromDB.map((each,index) => <SingleTodo data={each} key={index}></SingleTodo>)
        )
    }

    return ( 
        <div className="display-container">{dataFromDB.length > 1 && displayAllTodos()}</div>
     );
}
 
export default Display; 