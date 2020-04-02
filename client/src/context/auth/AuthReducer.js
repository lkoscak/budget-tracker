export default (state, action) => {
    switch (action.type) {
        case 'AUTHENTICATION_SUCCESS':
            return {
                ...state,
                user:action.payload.data,
                isAuthenticated:true
            }
        case 'AUTHENTICATION_FAIL':
            return {
                ...state,
                error:true,
                error_message:action.payload.error
            }
        case 'NO_TOKEN':
            return{
                ...state,
                isAuthenticated:false
            }
        default:
            return state;
    }
}