import {combineReducers} from 'redux'
import {postReducer} from './post-reducer'

export const combinedReducers = combineReducers({
  posts: postReducer
});


