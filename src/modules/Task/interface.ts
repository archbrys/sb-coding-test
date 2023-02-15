import { Action } from 'redux'

export interface Payload {
  [key: string]: any;
}

export interface ITask {
  id: number,
  name: string,
  category: string
  [key: string]: any
}

export interface IStatus {
  taskId: number,
  status: string
}

export interface ITaskState {
  tasks: ITask[],
  status: IStatus[],
  isLoadingTask: boolean
  isLoadingStatus: boolean
}

export interface TaskAction extends Action {
  payload: Payload
}
