import _posts from '../data/posts'
import {combineReducers} from 'redux';

function comments(state={}, action){
    //console.log("comments reducer");
    switch (action.type){
        case 'ADD_COMMENT': 
         if(!state[action.postId]){
               return {...state, [action.postId] :[action.comment]}
         } 
         else{
            return {...state,[action.postId]:[...state[action.postId],action.comment]}
         }
         case 'LOAD_COMMENTS': return action.comments
        default: return state
    }
}

function posts(state = _posts, action){
    //console.log(action.index);
    //console.log("post reducer");
    switch(action.type){
        case 'REMOVE_POST':   
             return [...state.slice(0,action.index),...state.slice(action.index+1)];
        case 'ADD_POST': {
            console.log(action.post);
            return [...state,action.post]
        }
        case 'LOAD_POSTS': return action.posts
        default: return state;
    }
}

 const rootReducer =combineReducers({posts, comments})
export default rootReducer