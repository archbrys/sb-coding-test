import { combineReducers } from 'redux'
import * as task from '../modules/Task/reducer'


const rootReducer = combineReducers({
  task: task.reducer,
})

export default rootReducer
export type RootState = ReturnType<typeof rootReducer>
