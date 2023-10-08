import React from 'react'

function Task(props: { name: string }): JSX.Element {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

export default Task
