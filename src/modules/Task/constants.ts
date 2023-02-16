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
export const OVERRIDE_STATUS = `${name}/OVERRIDE_STATUS`


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
  submit = "#87CEEB",
  override = "#f6f217"
}

export type ColorName = keyof typeof Color
