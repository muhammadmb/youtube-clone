const init = [];

export const Reducer = (state = init, action) =>{
    if (action.type == "ADD"){
        return action.payload;
    }
    return state;
}