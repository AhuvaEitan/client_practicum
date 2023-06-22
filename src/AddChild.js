import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {setChildName,setChildBd,setChildId} from './actions';
import { store } from './store';
import {Input} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function AddChild(props){
    const index=props.index;
    const children=useSelector(state=>state.user.children)
    const[inputName,setInputName]=useState(children[index].name)
    const[inputId,setInputId]=useState(children[index].id)
    const[inputBd,setInputBd]=useState(children[index].bd)

 
    const dispatch=useDispatch()
    function updateStore(val,func){
        switch(func){
         case 'name':
            console.log('update name')
             dispatch(setChildName(val,index))
             console.log('store.state:',store.getState())
             break;
         case 'id':
             dispatch(setChildId(val,index))
             break;
         case 'bd':
             dispatch(setChildBd(val,index)) 
             break; 
        }
       
        console.log('store.state:',store.getState())
     }


    function validate(event){
        // debugger;
         if (!/[0-9]/.test(event.key))
            event.preventDefault()
            else
              if(event.target.value.length==9)
              {
                updateStore(event.target.value,'id');
                event.preventDefault()
              }
         }

    return(
       
        <div>
             {console.log('addchild component')}
            
            <TextField type="text" label="שם פרטי" id="name" required={true} value={inputName}  onChange={(e)=> setInputName(e.target.value)} onBlur={(e)=>{ updateStore(e.target.value,'name')}}></TextField>
           
            <TextField type="text" label="תעודת זהות" id="id" required={true} value={inputId} onKeyPress={(e)=>validate(e)} onChange={(e)=>setInputId(e.target.value)} ></TextField>
            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                 <DatePicker label="תאריך לידה" value={inputBd} required={true}
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(e)=>setInputBd(e.target.value)} 
                    onBlur={(e)=>{updateStore(e.target.value,'bd')}}>
                 </DatePicker>
            </LocalizationProvider> */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
       <DatePicker label="תאריך לידה" value={inputBd} 
                    onChange={(value)=>setInputBd(value)} 
                    onBlur={(value)=>{updateStore(value,'bd')}}
                    renderInput={(params) => <TextField {...params} />}
                    />
        </LocalizationProvider>
        
        
            {/* <Input type="date"  label="תאריך לידה" id="bd" value={inputBd} onChange={(e)=> setInputBd(e.target.value)}  onBlur={(e)=>{updateStore(e.target.value,'bd')}}></Input> */}
        </div>
    )
}
 
export default AddChild