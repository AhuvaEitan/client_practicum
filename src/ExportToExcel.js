import { downloadExcel } from 'react-export-table-to-excel';
import { useSelector } from 'react-redux';

function ExportToExcel() {
  const user=useSelector(state=>state.user)
  const header = [ "Lastname","Firstname", "birthDate","id","gender","HMO"];
  const body = [
    [user.lname,user.fname,user.birthDate,user.id,user.gender,user.HMO],
    
  ];

 
  function handleDownloadExcel() {
    downloadExcel({
      fileName: "react-export-table-to-excel -> downloadExcel method",
      sheet: "react-export-table-to-excel",
      tablePayload: {
        header,
        
        body: body 
      },
    });
  }
  return(
    <div>
      <button onClick={handleDownloadExcel}>download excel</button>
    </div>
  )
}
export default ExportToExcel;