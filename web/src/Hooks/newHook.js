import React from 'react'

const name = "dc"

const newHook = () => {

    const same = () =>{
return(`button clicked by ${name}`)
    }
  return (
    <div>
    <p>the order will be same</p>
    <button onClick={same}></button>
    </div>
  )
}

export default newHook
