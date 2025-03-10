import React from 'react'
import TestContextProvider from './context/TodoContextProvider'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'


function App(){
  return(
    <TestContextProvider>

    <TodoInput/>  
    <TodoList/>

    </TestContextProvider>
  )
}

export default App