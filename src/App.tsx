import React, { useState } from 'react'
import Tasklist from './components/Tasklist'
import Item from './models/item'
import TaskForm from './components/TaskForm'

function App() {
  const [items, setItems] = useState<Item[]>([])
  function generateID() {
    // 0 - 99
    return Math.floor(Math.random() * 100)
  }
  const addItem = (name: string) => {
    setItems([...items, { id: generateID(), name }])
  }

  return (
    <div className="App">
      <TaskForm onAddItem={addItem} />
      <Tasklist items={items} />
    </div>
  )
}

export default App
