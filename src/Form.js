
import {useEffect, useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setFname, setLname ,setId,setBd,setGender,setHMO,addChild} from './actions';


import { store } from './store';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { postUser ,postUserByFetch} from './apiCalls';
import { Select ,MenuItem,InputLabel, Button, FormControlLabel} from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import './App.css';
import ExportToExcel from './ExportToExcel';
import ChildrenForm from './ChildrenForm'

function Form(){


const user=useSelector(state=>state.user)
const children=user.children;
const [inputLname,setInputLname]=useState(user.lname)
const [inputFanme,setInputFname]=useState(user.fname)
const [inputBd,setInputBd]=useState(user.bd)
const [inputId,setInputId]=useState(user.id)
const [inputGender,setInputGender]=useState(user.gender)
const [inputHMO,setInputHMO]=useState(user.HMO)
const dispatch =useDispatch();

function updateStore(val,func){
   console.log('updatestore');
    switch(func){
     case 'lname':
         dispatch(setLname(val))
         break;
     case 'fname':
         dispatch(setFname(val))
         break;
     case 'id':
         dispatch(setId(val))
         break;
     case 'bd':
         dispatch(setBd(val)) 
         break; 
    case 'gender':
        dispatch(setGender(val))
        break;
    case 'HMO':
        dispatch(setHMO(val))
        break;
    }
    console.log('store.state:',store.getState())
 
 }

//  function validate(target){
//     console.log('target:',target)
//     if(target.value.length==9&&'/[0-9]/')
//        updateStore(target.value,'id');
//     else{
//         setInputId("");
        
//     }
        

// }

 function addUser() {
    console.log('function addUesr')
   
    postUser(user).then(res=>console.log(res));
  }

  function validate(event){
    // debugger;
     if (!/[0-9]/.test(event.key))
        event.preventDefault()
        else
          if(event.target.value.length==9&&'/[0-9]/')
          {
            updateStore(event.target.value,'id');
            event.preventDefault()
          }
     }
  

return(
    <>
    <Form
     sx={{
        display:'flex',
        flexDirection:'column',
        textAlign: 'center',
        width:500,
       
     }}>
        
        <TextField sx={{margin:1}}  type="text"  label="שם משפחה" id="lname" defaultValue={inputLname} required={true} onChange={(e)=>setInputLname(e.target.value)} onBlur={(e)=>{updateStore(e.target.value,'lname')}}></TextField>
        
        
        <TextField  sx={{margin:1}} type="text" label="שם פרטי" id="fname" value={inputFanme} required={true}  onChange={(e)=>setInputFname(e.target.value)} onBlur={(e)=>{updateStore(e.target.value,'fname')}}></TextField>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker   label="תאריך לידה" value={inputBd} 
                    onChange={(value)=>setInputBd(value)} 
                    onBlur={(value)=>{updateStore(value,'bd')}}
                    renderInput={(params) => <TextField {...params} />}
                    />
        </LocalizationProvider>
        
        <TextField   sx={{margin:1}} type="text" label="מספר זהות" value={inputId} required={true} onKeyPress={(e)=>{validate(e)}} onChange={(e)=>setInputId(e.target.value)} ></TextField>
        <FormControl>
           <InputLabel id="gender">מין</InputLabel>
           <Select sx={{margin:1}} labelId='hmo'  label="מין" required={true} value={inputGender}  onChange={(e)=>setInputGender(e.target.value)} onBlur={(e)=>{updateStore(e.target.value,'gender')}}>
                <MenuItem value={"זכר"}>זכר</MenuItem>
                <MenuItem value={"נקבה"}>נקבה</MenuItem>
           </Select>
        </FormControl>

        <FormControl>
        <InputLabel id="hmo">קופת חולים</InputLabel>
        <Select  sx={{margin:1}} labelId='hmo'  label="קופת חולים" value={inputHMO} required={true} onChange={(e)=>setInputHMO(e.target.value)} onBlur={(e)=>{updateStore(e.target.value,'HMO')}}>
                <MenuItem value={"מאוחדת"}>מאוחדת</MenuItem>
                <MenuItem value={"מכבי"}>מכבי</MenuItem>
                <MenuItem value={"לאומית"}>לאומית</MenuItem>
                <MenuItem value={"כללית"}>כללית</MenuItem>
        </Select>
        </FormControl>
        
        <Button  sx={{margin:1}} variant="outlined" onClick={()=> dispatch(addChild({name:'',id:'',bd:''}))} >הוסף ילד</Button>
        <ChildrenForm></ChildrenForm>
        <input type="submit"  onClick={addUser}></input>
        </Form>

        <ExportToExcel></ExportToExcel>
        </>
)
}
export default Form;