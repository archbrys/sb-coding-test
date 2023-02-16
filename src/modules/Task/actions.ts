import axios from "axios";
import { Dispatch } from "redux"
import { FETCH_STATUS, FETCH_TASK, OVERRIDE_STATUS } from "./constants";
import { IStatus, ITask } from "./interface";

export const fetchTasks =
  (): any =>
  async (dispatch: Dispatch): Promise<any> => {
    dispatch({
      type: FETCH_TASK.REQUEST,
    })
    try {
      const response = await axios({
        method: 'get',
        url: 'https://react-learning-server.herokuapp.com/tasks',
      })
      dispatch({
        type: FETCH_TASK.SUCCESS,
        payload: {
          tasks: response.data
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_TASK.FAILED,
      })
    }
  }

export const fetchStatus =
  (): any =>
  async (dispatch: Dispatch): Promise<any> => {
    dispatch({
      type: FETCH_STATUS.REQUEST,
    })
    try {
      const response = await axios({
        method: 'get',
        url: 'https://react-learning-server.herokuapp.com/statuses',
      })
      dispatch({
        type: FETCH_STATUS.SUCCESS,
        payload: {
          status: response.data
        },
      })
    } catch (error) {
      dispatch({
        type: FETCH_STATUS.FAILED,
      })
    }
  }



export const overrideAllStatus =
  (statuses: IStatus[]): any =>
  async (dispatch: Dispatch): Promise<any> => {
    const overrided = statuses.map((status) => {
      return {...status, status: "override"}
    })
    dispatch({
      type: OVERRIDE_STATUS,
      payload: {
        status: overrided
      }
    })
  }