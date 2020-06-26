export const increasePer = (value) => {
    return{
        type:'INCREASE_PERCANTAGE',
        value:value
    }
}

export const decreasePer = (value) => {
    return {
        type: 'DECREASE_PERCANTAGE',
        value:value
    }
}
