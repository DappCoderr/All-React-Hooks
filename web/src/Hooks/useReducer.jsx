import React, {useReducer} from 'react'

// const initialState = {count:0, toggle:true}

const Reducer = () => {

  const [state, dispatch] = useReducer(reducer, {count:0, toggle:true})

  return (
    <div>
        <p>Value: {state.count}</p>
        <p>Value: {state.toggle ? "Light Mode" : "Dark Mode"}</p>
        <button onClick={() => {
            dispatch({type: "increment", payload:5})
        }}>+</button>
        <button onClick={() => {
            dispatch({type: "decrement", payload:5})
        }}>-</button>
        <button onClick={() => {
            dispatch({type: "toggleShowTheme"})
        }}>change mode</button>
    </div>
  )
}

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return{count: state.count + action.payload, toggle: state.toggle}
        case "decrement":
            return{count: state.count - action.payload, toggle: state.toggle}
        case "toggleShowTheme":
            return{count: state.count, toggle: !state.toggle}
        default:
            throw new Error();
    }
}

export default Reducer

// import React, { useReducer } from 'react'

// const UseReducer = () => {

//     const reducer = (state, action) => {
//         switch(action.type){
//             case "increment":
//                 return {count:state.count+1, showText:state.showText}
//             case "toggleShowText":
//                 return {count:state.count, showText: !state.showText}
//             default:
//                 return state
//         }
//     }

//     const [state, dispatch] = useReducer(reducer,{count:0, showText:true})


//   return (
//     <div>
//         {state.count}
//         <button onClick={() => {
//             dispatch({type: "increment"})
//             dispatch({type: "toggleShowText"})
//         }}>click me</button>
        
//         {state.showText ? <p>number is even</p> : <p> number is odd</p>}
//     </div>
//   )
// }

// export default UseReducer