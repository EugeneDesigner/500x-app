import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import {loadState, saveState } from './localStorage'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const store = createStoreWithMiddleware(rootReducer)
console.log(loadState().saved)
store.subscribe(()=>{
  saveState({
    saved: store.getState().photos.saved
  })
})

if (loadState()) {
  store.dispatch({
    type: 'SAVE_PHOTOS',
    saved: loadState().saved
  })
}


export default store
