import React, { useEffect, useState } from "react";
import Axios from "axios"

export default function Person(props) {

  const [actionContent, setActionContent] = useState([])
  const [viewActions, setViewActions] = useState(false)
  const [contentUpdate, setContentUpdate] = useState([])

  const x = props.project
  
  const site = "localhost:5000"

  useEffect(() => {
    Axios
      .get(`${site}/api/projects/${props.project.id}/actions`)
      .then(response => {
        console.log(response)
        setActionContent(response.data.map(action => action)
        )
      })
      .catch(error => {
        console.log(error)
      })
  }, [contentUpdate])

  const toggleActionCompleted = (state, id) => {
    Axios
      .put(`${site}/api/actions/${id}`, { completed: !state })
      .then(res => {
        console.log(res)
        setContentUpdate(res)

      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div >
      <h1>
        {x.name}
      </h1>
      <div>
        <p>{x.description}</p>
        <button onClick={() => { props.toggleProjectCompleted(x.completed, x.id) }}>{x.completed ? "set as uncompleted" : "set as completed"}</button>
        {viewActions ?
          (actionContent.map(action => {
            return (
              <div key={action.id}>
                <h4>{action.description}</h4>
                <p>{action.notes}</p>
                <button onClick={() => { toggleActionCompleted(action.completed, action.id) }}>{action.completed ? "set as uncompleted" : "set as completed"}</button>
              </div>
            )
          }))
          : <div></div>}
        <button onClick={() => { setViewActions(!viewActions) }} >{viewActions ? "Hide Actions" : "View Actions"}</button>
      </div>
    </div>
  )
}
