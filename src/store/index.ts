import { applyMiddleware, compose, createStore, Store, StoreEnhancer } from 'redux'
import thunkMiddleware from 'redux-thunk'

import loggerMiddleware from './middleware/logger'
import rootReducer from './reducers'

let store: Store

const configureStore = (preloadedState: any) => {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers: StoreEnhancer  = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store
}

export const getStore = (): Store => store

export default configureStore

