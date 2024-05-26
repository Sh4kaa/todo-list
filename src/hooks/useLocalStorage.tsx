import React from 'react'
import { ITask } from '../interfaces/Task';

const useLocalStorage = (key: string, initialValue: ITask[]): [ITask[], React.Dispatch<React.SetStateAction<ITask[]>>] => {
  const [value, setValue] = React.useState<ITask[]>(() => {
    const localValue = window.localStorage.getItem(key);
    return localValue ? JSON.parse(localValue) : initialValue
  })

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  return [value, setValue]
}

export default useLocalStorage