import { CREATE_STREAM, EDIT_STREAM, FETCH_STREAM, SIGN_IN, SIGN_OUT, INITIAL_STATE } from '../actions/types';
import authReducer from './authReducer';
import moxios from 'moxios'

describe('auth reducer', () => {

    it('should return default state', () => {
        const newState = authReducer(undefined, INITIAL_STATE);
        expect(newState).toEqual({});
    });


    it('should return new state if recieving SIGN_OUT', () => {
        const auth = {"isSignedIn": false, "userId": null}
        const newState = authReducer(undefined,{
            type: SIGN_OUT,
            payload: auth
        });

        expect(newState).toEqual(auth);
        
    });
});



it('should return new state if recieving SIGN_IN', () => {
    const auth = {"isSignedIn": true, "userId": null}
    const newState = authReducer({
        type: SIGN_IN,
        payload: auth
    });

    expect(newState).toEqual(auth);
    console.log(newState);
    console.log(auth);
    
});
