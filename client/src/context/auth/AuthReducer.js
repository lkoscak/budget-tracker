export default (state, action) => {
    switch (action.type) {
        case 'AUTHENTICATION_SUCCESS':
            console.log('here');
            return ({
                error:false,
                error_message:"",
                user:action.payload.data,
                isAuthenticated:true
            })
        case 'AUTHENTICATION_FAIL':   
            return ({
                error:true,
                error_message:action.payload.error,
                user:null,
                isAuthenticated:false
            })
        case 'NO_TOKEN':
            return (
                action.payload
            )
        case 'LOGOUT':
            return (
                action.payload
            )
        default:
            return state;
    }
}