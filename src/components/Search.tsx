import React, {useState } from "react";

interface Props {
    setIsModalOpen : React.Dispatch<React.SetStateAction<boolean>>
    setSearchString : React.Dispatch<React.SetStateAction<string>>
}

const SearchAndAdd : React.FC<Props> = ({setIsModalOpen, setSearchString}) => {

    const [inputTracker, setInputTracker] = useState<string>("")
    

    const submitHandler = (e : React.FormEvent)  => {
      
        e.preventDefault()
        setSearchString(inputTracker)
       
    }

 
    return (  
        <form className="form" onSubmit={(e)=>submitHandler(e)}>
          
                <input placeholder="Search a todo" onChange={(e)=>setInputTracker(e.target.value)}></input>
                <button type="submit"> Search</button>

                <button onClick={()=>setIsModalOpen(true)}> Add todo </button>
           
           
        </form>
    );
}
 
export default SearchAndAdd;