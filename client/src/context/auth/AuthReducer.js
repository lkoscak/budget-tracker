export default (state, action) => {
    switch (action.type) {
        case 'AUTHENTICATION_SUCCESS':
            console.log(action.payload.data);
            return ({
                error:false,
                error_message:"",
                user:action.payload.data,
                isAuthenticated:true,
                token:localStorage.getItem('auth-token')
            })
        case 'AUTHENTICATION_FAIL':   
            return ({
                error:true,
                error_message:action.payload.error,
                user:null,
                isAuthenticated:false,
                token:""
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