import React, { useEffect, useState } from "react";

interface Props {
    setIsModalOpen : React.Dispatch<React.SetStateAction<boolean>>
}

const SearchAndAdd : React.FC<Props> = ({setIsModalOpen}) => {

    const [inputTracker, setInputTracker] = useState<string>("")
    const [searchString, setSearchString] = useState<string>("")

    useEffect(()=>{
        console.log(inputTracker)
    },[inputTracker])

    const submitHandler = (e : React.FormEvent)  => {
        e.preventDefault()
        setSearchString(inputTracker)
    }


    return (  
        <form className="form" onSubmit={(e)=>submitHandler(e)}>
          
                <input placeholder="Search a todo" onChange={(e)=>setInputTracker(e.target.value)}></input>
                <button onClick={()=>setIsModalOpen(true)}> + </button>
           
           
        </form>
    );
}
 
export default SearchAndAdd;