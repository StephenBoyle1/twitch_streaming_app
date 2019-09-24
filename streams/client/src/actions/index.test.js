import moxios from 'moxios';
// import {
// SIGN_IN,
// SIGN_OUT,
// CREATE_STREAM,
// FETCH_STREAM,
// FETCH_STREAMS,
// DELETE_STREAM,
// EDIT_STREAM
//   } from "./types";
import { fetchStreams, fetchStream } from '../actions/index';
import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers/index';
// import { middlewares } from './../src/createStore';
import { middlewares } from '../../src/index';


export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
};

export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState);
};


  describe('get actions', () => {
      moxios.install();
  });

  afterEach(() => {
      moxios.uninstall();
  });


  describe('fetcstream is updated correctly', () => {

    const expectedState = [{
        title: 'Example title 1',
        body: 'Some Text'
    }, {
        title: 'Example title 2',
        body: 'Some Text'

    }, {
        title: 'Example title 3',
        body: 'Some Text'
    }];
    const store = testStore();

    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
            status: 200,
            response: expectedState
        });
    });


    return store.dispatch(fetchStreams())
    .then(() => {
        const newState = store.getState();
        expectedState(newState.posts).toBe(expectedState);
    });



 
  });


  test('Store is updated correctly', () => {

    const expectedState = [{
        title: 'Example title 1',
        body: 'Some Text'
    }, {
        title: 'Example title 2',
        body: 'Some Text'

    }, {
        title: 'Example title 3',
        body: 'Some Text'
    }];
    const store = testStore();

    moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
            status: 200,
            response: expectedState
        })
    });

    return store.dispatch(fetchStream())
    .then(() => {
        const newState = store.getState();
        expect(newState.posts).toBe(expectedState);
    })
});

