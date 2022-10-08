const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS';

const authReducer = (state = false, action) => {
    switch (action.type) {
        case AUTHORIZATION_SUCCESS:
            return {
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            };
        default:
            return state;
    }
};

export default authReducer;
