export default function(state = [], action) {
    switch(action.type) {
        case "ADD_PRODUCT":
            return [
                ...state,
                action.product
            ];
        case "REMOVE_PRODUCT":
            const modifiedState = [...state];
            modifiedState.splice(action.id, 1);
            return modifiedState;            
        default:
            return state;
    }
}
