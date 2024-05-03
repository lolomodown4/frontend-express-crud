import React  from "react";
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Todo from "../TodosModel/TodosModel"

interface Props {
    data : Todo,
    setDataFromDB: React.Dispatch<React.SetStateAction<Todo[]>>
  
    _id : String | undefined

}

const TodoCard : React.FC<Props>= ({data,setDataFromDB,_id}) => {


    const handleDelete = () => {
        console.log("deleted")
        fetchDelete()
        
    }

    const fetchDelete = async() => {
        try {
           
          
            const response = await fetch(`http://localhost:5000/todo/${_id}`, {method : "DELETE"})

            if (!response.ok){
                throw new Error ("can't delete this item")
            }

            const data = await response.json()
            
            setDataFromDB(data)
            console.log(data)
         
        } catch (error) {
            console.log(error)
        }
    }

    const handledChecked = (id:String | undefined) => {
        console.log("checked the number ", id)
    }

    const handleEdit = () => {
        console.log("edit")
    }

    return ( 
        <div className="single-todo">
            {data.title}
            <div className="icons">
                <span className="edit-icon" onClick={handleEdit}> <CreateRoundedIcon sx={{color:"#092327", fontSize:"30px"}}/></span>
                <span className="delete-icon" onClick={()=>handleDelete()}> <DeleteRoundedIcon sx={{color:"red", fontSize:"30px"}}/></span>
                <span className="check-icon" onClick={()=>handledChecked(_id)}> <CheckRoundedIcon sx={{color:"green", fontSize:"30px"}}/></span>
            </div>
        </div> 
    );
}
 
export default TodoCard;