const initialState = {
    city: '',
    temperatureData: [],
}

const reducer = (state = initialState, actions) => {
    switch (actions.type) {
        case 'SEARCH_CITY':
            return {
                ...state,
                city: actions.text
            }
            case 'SET_DATA':
            return {
                ...state,
                temperatureData: actions.data
            }
            default:
                return state;
    }
}

export default reducer;