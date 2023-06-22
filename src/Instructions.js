import { useSelector } from "react-redux"
import { getAllUsers } from "./apiCalls"
function Instructions(){
 
    const fname = useSelector(state => state.user.fname)
    const lname = useSelector(state => state.user.lname)
    return(
        <>
          <h1>{fname} {lname} שלום</h1>
          <p>...הוראות למילוי הטופס</p>
        </>
    )
}
export default Instructions