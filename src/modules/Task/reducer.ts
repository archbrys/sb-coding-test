import { FETCH_STATUS, FETCH_TASK, INITIAL_STATE, OVERRIDE_STATUS } from './constants'
import { ITaskState, TaskAction } from './interface'

export const reducer = (
  state: ITaskState = INITIAL_STATE,
  action: TaskAction
): ITaskState => {
  switch (action.type) {

    case FETCH_TASK.REQUEST:
      return {
        ...state,
        isLoadingTask: true,
      }

    case FETCH_TASK.SUCCESS:
      return {
        ...state,
        isLoadingTask: false,
        tasks: action.payload.tasks,
      }

    case FETCH_TASK.FAILED:
      return {
        ...state,
        isLoadingTask: false,
      }

      case FETCH_STATUS.REQUEST:
        return {
          ...state,
          isLoadingStatus: true,
        }
  
      case FETCH_STATUS.SUCCESS:
        return {
          ...state,
          isLoadingStatus: false,
          status: action.payload.status,
        }
  
      case FETCH_STATUS.FAILED:
        return {
          ...state,
          isLoadingStatus: false,
        }

      case OVERRIDE_STATUS:
        
        return {
          ...state,
          status:action.payload.status
        }
   
    default:
      return state
  }
}
