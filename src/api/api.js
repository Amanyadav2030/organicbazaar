import axios from "axios";

export function getAllProduct(){
    return axios.get('https://safe-hollows-22804.herokuapp.com/bellavita').then((res)=>{
        return res;
    })
}
export function getsingleData(id){
    return axios.get(`https://safe-hollows-22804.herokuapp.com/bellavita/${id}`).then((res)=>{
        return res;
    })
}