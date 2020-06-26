let initialState = {
    loading: false,
    show:false
}

const reducer = (state = initialState,action) => {
    switch(action.type) {
        case 'VIEW_RESULT' :
            return{
                ...state,
                show:true
            }
        case 'CANCEL_VIEW' :
            return{
                ...state,
                show:false
            }
        case 'SEND_DATA' : 
            return{
                ...state,
                loading:true,
                show:false
            }
        default: 
        return state; 
    }
}

export default reducer