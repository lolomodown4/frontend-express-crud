import React, { useState } from "react";

import "./styles.css"

import Todo from "../TodosModel/TodosModel";

interface Props {
    setIsModalOpen : React.Dispatch<React.SetStateAction<boolean>>
    setIsSaveButtonClicked : React.Dispatch<React.SetStateAction<boolean>>

}

const Modal : React.FC<Props> = ({setIsModalOpen, setIsSaveButtonClicked}) => {

    const [titleTracker, setTitleTracker] = useState<string>("")
    
    const [descriptionTracker, setDescriptionTracker] = useState<string>("")


    const handleClose = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = (e : React.FormEvent) => {

        setIsModalOpen(false)
        /* add the data to the database here */
        postData()

        
    }

    const postData = async() => {
        const bodyData:Todo = {
            'id' : 1,
            'title': titleTracker,
            'description': descriptionTracker,
            'isDone' : false
        }; 

        try {
            const response = await fetch("http://localhost:5000/todo", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(bodyData)
            })

            if (!response.ok) {
                throw new Error("cannot post the data") 
            }

            await response.json()

          
            setIsSaveButtonClicked(true)
        } catch (error) {
            console.log(error)
        }
    }

    return ( 
        <div className="modal-container">
            <form className="modal-window" onSubmit={(e)=>handleSubmit(e)}> 
                <h2>Add a Todo</h2>
                <h3 className="close-button" onClick={handleClose}>X</h3>
                <>
                    <div className="modal-title-container">   
                        <label className="labels" >title</label>
                        <input placeholder="Enter title here" onChange={(e)=>{setTitleTracker(e.target.value)}} name="title"></input>
                    </div>
                    
                    <div className="modal-description-container">
                        <label className="labels">description</label>
                        <textarea placeholder="Enter description here" onChange={(e)=>{setDescriptionTracker(e.target.value)}} name="title"></textarea>
                    </div>
                </>

                <button type="submit"> Save </button>
            </form>
        </div>
     );
}
 
export default Modal;