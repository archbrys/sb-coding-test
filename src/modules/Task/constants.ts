import { ITaskState } from './interface'

export const name = 'TASK'
export const SET_TASKS = `${name}/SET_TASKS`

export const FETCH_TASK = {
  REQUEST: 'FETCH_TASK/REQUEST',
  SUCCESS: 'FETCH_TASK/SUCCESS',
  FAILED: 'FETCH_TASK/FAILED'
}

export const FETCH_STATUS = {
  REQUEST: 'FETCH_STATUS/REQUEST',
  SUCCESS: 'FETCH_STATUS/SUCCESS',
  FAILED: 'FETCH_STATUS/FAILED'
}


// STATE
export const INITIAL_STATE: ITaskState = {
  tasks: [],
  status: [],
  isLoadingTask: false,
  isLoadingStatus: false
}

export enum Color {
  pass = "#ADFF2F",
  fail = "#FF0000",
  submit = "#87CEEB"
}

export type ColorName = keyof typeof Color
