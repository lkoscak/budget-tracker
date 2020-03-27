export default (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTIONS':
            console.log(action.transactions);
            return(
                {
                    ...state,
                    transactions:action.transactions
                }
            )
        default:
            return state;
    }
}
