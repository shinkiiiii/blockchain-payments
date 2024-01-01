import { createAction, createActions } from 'redux-actions';

export const getType = (reduxAction) => {
    return reduxAction().type;
}

export const getHotels = createActions({
    getHotelsRequest: undefined,
    getHotelsSuccess: (payload) => payload,
    getHotelsFailure: (err) => err,
});

export const showLogin = createAction('Show_login_form');
export const hideLogin = createAction('Hide_login_form')