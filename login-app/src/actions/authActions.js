export const login = (credentials) => {

const login = (username, password) => {
    return dispatch => {
        // Simulación de una llamada a una API
        setTimeout(() => {
            if (username === 'user' && password === 'password') {
                dispatch({ type: 'LOGIN_SUCCESS', payload: { username } });
            } else {
                dispatch({ type: 'LOGIN_FAILURE', error: 'Credenciales inválidas' });
            }
        }, 1000);
    };
}
}
