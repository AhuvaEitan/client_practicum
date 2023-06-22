import axios from "axios";
import { store } from './store';

export function postUser(user) {
    return axios.post('https://localhost:7172/api/Person', {LastName : user.lname ,FirstName:user.fname,Id:user.id,BirthDate:user.birthDate,Gender:user.gender,HMO:user.hmo,Children:user.children}).then((res) =>{console.log(res.data)})
    
}

// export function getAllUsers() {
//     return axios.get('https://localhost:7172/api/Person').then(res=>console.log('res: ', res))
// }

export function postUserByFetch(user) {
    return fetch('https://localhost:7172/api/Person', {
        method: 'POST',
        headers:{'Content-type':'application/json'},
        body:user
    }).then(r=>r.json())
}