import React from 'react'

const Number = (props) => {
    const numbers = props.numbers
    const listItems = numbers.map((e) =>
        <li key={e.toString()}>{e}</li>
    )
  return (
    <div>
        <ul>{listItems}</ul>
        <ol>{listItems}</ol>
    </div>
  )
}

export default Number