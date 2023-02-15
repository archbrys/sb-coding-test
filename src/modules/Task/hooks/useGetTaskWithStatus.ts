
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { RootState } from '../../../store/reducers'
import { ITask } from '../interface'


const useGetTaskWithStatus = (): ITask[] => {
  const rootState = useSelector<RootState>((state) => state)
  const selectTasks = (
    state: RootState
  ) => state.task.tasks

  const selectStatus = (
    state: RootState
  ) => state.task.status

  return createSelector([selectTasks, selectStatus], (tasks, status): ITask[] =>
   (
      tasks.map((task) => {
        const _status = status.find((s) => s.taskId === task.id)
        return _status ? {...task, status: _status.status} : task
       
      })
   )
  )(rootState as RootState)
}

export default useGetTaskWithStatus
