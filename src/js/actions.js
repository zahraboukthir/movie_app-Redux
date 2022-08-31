
import { ADDMOVIE, FILTERBYName } from './actionsTypes';

export const addmovie = (newmovie) => {
     return {type:ADDMOVIE,
    payload:newmovie}
}
export const filterbyname=(searchedname)=>{
    return{
        type:FILTERBYName,
        payload:searchedname
    }
}