import React from "react";
import CreateRoundedIcon from '@mui/icons-material/CreateRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import Todo from "../TodosModel/TodosModel"

interface Props {
    data : Todo
}

const TodoCard : React.FC<Props>= ({data}) => {
    return ( 
        <div className="single-todo">
            {data.title}
            <div className="icons">
                <span className="edit-icon"> <CreateRoundedIcon sx={{color:"#092327", fontSize:"30px"}}/></span>
                <span className="delete-icon"> <DeleteRoundedIcon sx={{color:"red", fontSize:"30px"}}/></span>
                <span className="check-icon"> <CheckRoundedIcon sx={{color:"green", fontSize:"30px"}}/></span>
            </div>
        </div> 
    );
}
 
export default TodoCard;