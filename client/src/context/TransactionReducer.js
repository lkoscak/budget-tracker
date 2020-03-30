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
        case 'DELETE_TRANSACTION':
            return(
                {
                    ...state,
                    transactions:state.transactions.filter(transaction => transaction._id!==action.payload)
                }
            )
        default:
            return state;
    }
}
