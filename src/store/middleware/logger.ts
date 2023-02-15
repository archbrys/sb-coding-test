import { Dispatch, MiddlewareAPI, Action } from "redux"

const logger = ({ getState }: MiddlewareAPI) =>  (next: Dispatch) => (action: Action) => {
  
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', getState())
  console.groupEnd()
  return result
}

export default logger