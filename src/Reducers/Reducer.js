const init = [];

export const Reducer = (state, action) =>{
    if (action.type == "ADD"){
        return action.payload;
    }
    return state;
}