
export const getRecord = (url) => {
    return async (dispatch) => {
        try {
            const response = await fetch(url, {mode: 'cors'})
            const data = await response.json()

            dispatch({
                type: 'GET_CALL_RECORD',
                payload: data,
            })
        } catch (error) {
            console.log(error)
        }
    }
}
