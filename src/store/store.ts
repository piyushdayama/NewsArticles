import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import thunk from 'redux-thunk'
import { InitialStateInterface, articleReducer } from '../reducers/articleReducer';
export interface IAppState {
    articleReducer: InitialStateInterface
}
const initialState = {};
const rootReducer = combineReducers<IAppState>({
    articleReducer: articleReducer
})

export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk))
    return store
}