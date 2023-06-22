import './App.css';
import Menu from './Menu'
import {Route,Routes} from 'react-router-dom'
import Form from './Form'
import Instructions from './Instructions'
import Toolbar from '@mui/material/Toolbar';
import axios from "axios";
import {useEffect, useState} from 'react'
import {ExportToExcel} from './ExportToExcel'



function App() {
  // const [data, setData] = useState([])
  // const fileName = "myfile"; // here enter filename for your excel file

  // useEffect(() => {
  //   const fetchData = () =>{
  //    axios.get('https://jsonplaceholder.typicode.com/posts').then(postData => {

  //    // reshaping the array
  //    const customHeadings = postData.data.map(item=>({
  //      "Article Id": item.id,
  //      "Article Title": item.title
  //    }))

  //     setData(customHeadings) 
  //    })
  //   }
  //   fetchData()
  // }, [])
  return (
    <div className="App">
      <Menu/>
     

      <Routes>
      <Route path="/Form" element={<Form></Form>}></Route>
      <Route path="/Instructions" element={<Instructions></Instructions>} />
      </Routes>
      
    </div>
  );
}

export default App;