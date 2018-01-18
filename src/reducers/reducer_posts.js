import _ from 'lodash';
import {FETCH_POSTS, FETCH_POST} from '../actions';

export default function(state = {}, action){
    switch (action.type) {
        case FETCH_POST:
        // console.log(action.payload.data);
        // const post = action.payload.data;
        //     const newState =  { ...state };
        //     newState[post.id] = post;
        //     return new State;
            return { ...state, [action.payload.data.id] : action.payload.data }
        case FETCH_POSTS:
        console.log(_.mapKeys(action.payload.data, 'id'));
            return _.mapKeys(action.payload.data, 'id');


            // break;
        default:
        
        return state;
    }
}