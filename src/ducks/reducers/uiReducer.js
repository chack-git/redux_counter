import { INCREASE_COUNTER, DECREASE_COUNTER, LOAD_POSTS } from '../actions/type'

const initialState = {
    counter: 10,
    posts: [
        {
            id: 1,
            title: 'first post'
        }
    ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREASE_COUNTER:
            return {
                ...state,
                counter: state.counter + action.payload
            }
        case DECREASE_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            }
        case LOAD_POSTS:
        console.log('hhhhh')
            return {
                ...state,
                posts: action.payload
            }
    }
    return state
}

export default reducer