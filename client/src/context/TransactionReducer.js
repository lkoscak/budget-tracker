export default (state, action) => {
    switch (action.type) {
        case 'GET_TRANSACTIONS':
            return(
                {
                    ...state,
                    transactions:action.payload
                }
            )
        case 'ADD_TRANSACTION':
            return(
                {
                    ...state,
                    transactions:[action.payload, ...state.transactions]
                }
            )
        default:
            return state;
    }
}
