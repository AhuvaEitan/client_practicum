import AddChild  from './AddChild';
import { useSelector } from 'react-redux'
function ChildrenForm(){

    
    const children=useSelector(state=>state.user.children)
    return(
       <div>
        {children.map((item,index)=>{return <AddChild index={index}></AddChild> })}
       </div>
    )
   
}
export default ChildrenForm