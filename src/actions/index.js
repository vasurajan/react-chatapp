import {SET_USER, CLEAR_USER} from './types'

// passing the user data that we are getting
export const setUser = (user) => {
    return {
       type: SET_USER,
       payload: {
           currentUser: user   // data that our state needs to be changed with
       }
    }
}

export const clearUser = () => {
    return {
        type: CLEAR_USER,
    }
}