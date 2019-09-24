import { CREATE_STREAM, EDIT_STREAM, FETCH_STREAM } from '../actions/types';
import streamReducer from './streamReducer';

describe('Stream Reducer', () =>{

    it('should return default state', () => {
        const newState = streamReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('should return new state if recieving type of create stream', () => {
        const streams = [];
        const newState = streamReducer(undefined,{
            action: CREATE_STREAM,
            payload: streams
        });
        // console.log(streams);
        console.log(streamReducer);

        expect(newState).toEqual(streams);
    });

    it('should return new state if recieving type edit stream', () => {
        const streams = [];
        const newState = streamReducer({
            type: EDIT_STREAM,
            payload: streams
        });
        console.log(streams);
        console.log(newState)

        expect(newState).toEqual(streams);
    });


    it('should return new state if recieving type of fetch stream', () => {
        const streams = {"undefined": [{"descritpion": "test1"}, {"title": "test 2"}, {"userId": "test 3"}, {"id": 4}]}
        console.log(streams);
        const newState = streamReducer(undefined,{
            type: FETCH_STREAM,
            payload: streams
        });
        console.log(newState);
        

        expect(newState).toEqual(streams);
    });
});