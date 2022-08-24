export function reducer(state,action){
    switch (action.type) {
        case 'SKIN_CARE':
                     return {
                        ...state,
                        skincare:action.payload
                    }
        
        case 'HAIR_CARE':
                     return {
                        ...state,
                        haircare:action.payload
                    }
        
        
        case 'BODY_CARE':
                     return {
                        ...state,
                        bodycare:action.payload
                    }
        
        
        case 'PERFUMES':
                     return {
                        ...state,
                        perfumes:action.payload
                    }
        
        
        case 'COMBOS':
                    return {
                        ...state,
                        combos:action.payload
                    }
        
    
        default:
            return state;
    }
}