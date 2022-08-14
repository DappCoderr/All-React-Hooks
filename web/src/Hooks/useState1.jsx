import React, { useState } from 'react'

const UseState1 = () => {
    const [inputValue, setinputValue] = useState("hello")

    const updateValue = (event) => {
        setinputValue(event.target.value)
    }
  return (
    <div>
        <input placeholder='Enter your task...' onChange={updateValue}/>
        {inputValue}
    </div>
  )
}

export default UseState1