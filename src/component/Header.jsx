import { useState } from "react"
import Form from "./Form"

function Header (){
    const [isOpen, setIsOpens] = useState(false)

    const handleOpen =()=> {
        setIsOpens (true)
    }
    
    const handleClose =()=> {
        setIsOpens (false)
    }


 return <div> 
    <div className=" flex justify-between bg-purple-500 px-3 py-2">
        <h1 className=" text-3xl text-white"> Nooty</h1>
        <button onClick={handleOpen} className=" bg-orange-400 px-3 py-5 text-xl rounded-xl"> Add Note </button>

    </div>


    {
        isOpen == true ? <Form close={handleClose}/> : ""
    }
 </div>
}
export default Header