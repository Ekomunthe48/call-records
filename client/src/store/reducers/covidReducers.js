const initialState = {
    recordCalls: []
}

const covidReducers =  (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CALL_RECORD':
            return {
                ...state,
                recordCalls: action.payload
            }
        default:
            return {
                state,
            }
    }
}

export default covidReducers