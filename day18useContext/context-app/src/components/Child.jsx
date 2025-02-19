import React, { useContext } from 'react'
import { contextName } from '../context/context'


const Child = () => {
  const name = useContext(contextName)
  return (
    <div>
      <p>child</p>
      <p>Name:{name.name}</p>
      <p>Age:{name.age}</p>
      <p>City:{name.city}</p>
      



    </div>
  )
}

export default Child