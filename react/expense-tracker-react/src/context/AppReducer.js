// how we specify state changes in response to certain actions

export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            console.log(state, state.transaction);
            return {
                ...state,
                transaction: [action.payload, ...state.transaction]
            }
        default:
            return state;
    }
}