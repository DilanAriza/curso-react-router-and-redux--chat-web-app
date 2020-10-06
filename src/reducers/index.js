import { actions } from '../actions/index';

const reducer = (state, action) => {
    switch (action.type) {
        case actions.setFavorite:
            console.log('Sending message in reducers')
            console.log(action.payload)
            console.log(state)
            return {
                ...state
            }
        default:
            return state
    }
}

export default reducer;