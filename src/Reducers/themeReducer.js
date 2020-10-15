const init = false;

export const themeReducer = (state = init, action) =>{
    if (action.type == "TOGGLE"){
        return action.payload;
    }
    return state;
}