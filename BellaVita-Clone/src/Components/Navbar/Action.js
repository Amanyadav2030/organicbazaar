export function funSkinCare(value){
    return {
        type:'SKIN_CARE',
        payload:value
    }
}
export function funHairCare(value){
    return {
        type:'HAIR_CARE',
        payload:value
    }
}
export function funBodyCare(value){
    return {
        type:'BODY_CARE',
        payload:value
    }
}
export function funPerfumes(value){
    console.log(value);
    return {
        type:'PERFUMES',
        payload:value
    }
}
export function funCombos(value){
    return {
        type:'COMBOS',
        payload:value
    }
}