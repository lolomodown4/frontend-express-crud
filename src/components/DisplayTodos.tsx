import React, { useEffect } from "react";
import Todo from "./TodosModel/TodosModel";

interface Props {
    dataFromDB : Todo[]
    setDataFromDB : React.Dispatch<React.SetStateAction<Todo[]>>
}

const Display : React.FC<Props> = ({dataFromDB, setDataFromDB}) => {

    useEffect(()=>{
       fetchData() 
    },[])

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
        console.log("etit")
        return (
            dataFromDB.map(each => <div>{each.title}</div>)
        )
    }

    return ( 
        <div className="display-container">{dataFromDB.length > 1 && displayAllTodos()}</div>
     );
}
 
export default Display; 