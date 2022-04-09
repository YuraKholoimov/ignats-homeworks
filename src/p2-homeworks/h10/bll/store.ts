import { combineReducers, createStore } from 'redux'
import {loadingReducer} from './loadingReducer'
import {themeReducer} from "../../h12/bll/themeReducer";

const rootReducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer

})

const store = createStore(rootReducers)

export default store

export type AppStoreType = ReturnType<typeof rootReducers>

// @ts-ignore
window.store = store // for dev
