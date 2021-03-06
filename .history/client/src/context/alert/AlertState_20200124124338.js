import React, {useReducer} from 'react'
import AlertContext from './alertContext'
import alertReducer from './alertReducer'
import {
    SET_ALERT, REMOVE_ALERT
} from '../types'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null,
        error: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState)

    // load user

    // register user

    // login user

    // logout

    // clear errors

    return (
        <AuthContext.Provider
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            loading: state.loading,
            user: state.user,
            error: state.error
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthState