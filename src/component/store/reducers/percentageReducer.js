let initialState = {
    percantage : 0,
}

const reducer = (state=initialState,action) => {
    switch(action.type){
        case 'INCREASE_PERCANTAGE':
            return{
                ...state,
                percantage: state.percantage + action.value
            }
        case 'DECREASE_PERCANTAGE':
        return {
            ...state,
            percantage: state.percantage - action.value
        }
        default:
            return state
    }
}

export default reducer