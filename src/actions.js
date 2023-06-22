

export function setLname(val){
    return { type: 'setLname', payload: val }
}

export function setFname(val){
    return { type: 'setFname', payload: val }
}
export function setId(val){
    return { type: 'setId', payload: val }
}

export function setBd(val){
    return { type: 'setBd', payload: val }
}

export function setGender(val){
    return { type: 'setGender', payload: val }
}

export function setHMO(val){
    return { type: 'setHMO', payload: val }
}
export function addChild(val){
    return{type:'addChild',payload:val}
}

export function setChildName(val,index){
    return{type:'setChildName',payload:val,id:index}
}

export function setChildId(val,index){
    console.log("child id:",val)
    return{type:'setChildId',payload:val,id:index}
}

export function setChildBd(val,index){
    return{type:'setChildBd',payload:val,id:index}
}



 