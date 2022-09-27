import axios from "axios";

export function getAllProduct(){
    return axios.get(process.env.REACT_APP_FORM_API_KEY).then((res)=>{
        return res;
    })
}
export function getsingleData(id){
    return axios.get(`${process.env.REACT_APP_FORM_API_KEY}/${id}`).then((res)=>{
        return res;
    })
}