
import produce from "immer"
import { createStore } from "redux"
const initialState = {
    user:{
    lname: '',
    fname: '',
    birthDate:null,
    id:'',
    gender:'',
    HMO:'',
    children: []
    }
   
}


const reducer = produce((state, action) => {
    switch(action.type){
        case 'setLname':
            state.user.lname = action.payload
            break
        case 'setFname':
            state.user.fname = action.payload
            break
        case 'setId':
            state.user.id = action.payload
            break
        case 'setBd':
            state.user.birthDate = action.payload
            break 
        case 'setGender':
            state.user.gender = action.payload
            break;
        case 'setHMO':
            state.user.HMO = action.payload
            break;
        case 'addChild':
            state.user.children.push(action.payload)
            break
       
        case 'setChildName':
           
            console.log('act:',action)
            console.log('act id',action.id)
            state.user.children[action.id].name=action.payload
            
            break;
            
        case 'setChildId':
            state.user.children[action.id].id=action.payload
            break;
        case 'setChildBd':
            state.user.children[state.user.children.length-1].bd=action.payload
            break;

   
    }
    
}, initialState)

export const store = createStore(reducer)
