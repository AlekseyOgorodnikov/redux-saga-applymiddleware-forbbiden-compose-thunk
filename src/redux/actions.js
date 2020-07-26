import { CREATE_POST, REQUEST_POSTS, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from './types'

export function createPost(post) {
    return {
        type: CREATE_POST,
        payload: post
    }
}
export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}
export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}
export function showAlert(text) {
    return dispatch => {
        dispatch({
            type: SHOW_ALERT,
            payload: text
        })
        setTimeout(() => {
            dispatch(hideAlert())
        }, 3000)
    }
}
export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}

export function fetchPosts() {
    return {
        type: REQUEST_POSTS
    }
    // return async dispatch => {
    //     try {
    //         dispatch(showLoader())//create loading...
    //         const responce = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    //         const json = await responce.json()
    //         dispatch({ type: FETCH_POSTS, payload: json })
    //         dispatch(hideLoader())//close loading...
    //     } catch (e) {
    //         dispatch(showAlert('Что-то пошло не так!'))
    //         dispatch(hideLoader())
    //     }
    // }
}