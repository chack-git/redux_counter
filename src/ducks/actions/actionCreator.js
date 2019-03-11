import { INCREASE_COUNTER, DECREASE_COUNTER, LOAD_POSTS } from './type'

export const increase = (dispatch, number) => dispatch({
    type: INCREASE_COUNTER,
    payload: number
})

export const decrease = (dispatch) => dispatch({
        type: DECREASE_COUNTER
})

export const load = (dispatch) => {
    fetch('http://jsonplaceholder.typicode.com/posts')
    .then(posts => dispatch({
        type: LOAD_POSTS,
        payload: posts.json()
    }))
}