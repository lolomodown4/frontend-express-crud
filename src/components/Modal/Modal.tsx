import React from "react";

import "./styles.css"

interface Props {
    setIsModalOpen : React.Dispatch<React.SetStateAction<boolean>>
}

const Modal : React.FC<Props> = ({setIsModalOpen}) => {


    const handleClose = () => {
        setIsModalOpen(false)
    }

    const handleSubmit = () => {
        setIsModalOpen(false)
        /* add the data to the database here */
    }

    return ( 
        <div className="modal-container">
            <form className="modal-window" onSubmit={handleSubmit}> 
                <h2>modal title</h2>
                <h3 className="close-button" onClick={handleClose}>X</h3>
                <>
                    <div className="modal-title-container">   
                        <label className="labels">title</label>
                        <input placeholder="Enter title here"></input>
                    </div>
                    
                    <div className="modal-description-container">
                        <label className="labels">description</label>
                        <textarea placeholder="Enter description here"></textarea>
                    </div>

    
                </>

                <button> Save </button>
            </form>
        </div>
     );
}
 
export default Modal;