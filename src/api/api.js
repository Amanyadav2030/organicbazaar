import axios from "axios";

export function getAllProduct(){
    return axios.get(import.meta.env.VITE_API_KEY).then((res)=>{
        return res;
    })
}
export function getsingleData(id){
    return axios.get(`${import.meta.env.VITE_API_KEY}/${id}`).then((res)=>{
        return res;
    })
}