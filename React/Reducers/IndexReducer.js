import * as Actions from '../Actions/ActionTypes'

const IndexReducer = (state = { didLoad: false }, action) => {
    switch (action.type) {
        case Actions.REDUX_STARTER_KIT:
            return Object.assign({}, state, {
                didLoad: action.didLoad
            }); 
        default:
            return state;
    }
}

export default IndexReducer