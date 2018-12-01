export default function(state = [], action) {
    let newState;
    switch(action.type) {
        case "INIT_FROM_CACHE":
            const cache = localStorage.getItem("products");
            if (cache) {
                newState = JSON.parse(cache);
            } else {
                newState = state;    
            }
            console.log(newState);
            break;
        case "ADD_PRODUCT":
            newState = [
                ...state,
                action.product
            ]
            localStorage.setItem("products", JSON.stringify(newState));
            break;
        case "REMOVE_PRODUCT":
            newState = [...state];
            newState.splice(action.id, 1);
            localStorage.setItem("products", JSON.stringify(newState));
            break;
        default:
            newState = state;
    }
    return newState;
}
