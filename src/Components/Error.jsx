import React from 'react'
import {useRouteError} from "react-router-dom"

const Error = () => {
    const error = useRouteError();
  return (
    <div>
        <h1>Oops! </h1>
        <h3>Something went wrong</h3>
        <h5>{error.status} { error.data}</h5>
    </div>
  )
}

export default Error;