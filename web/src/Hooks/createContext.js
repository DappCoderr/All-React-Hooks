import React, {createContext, useContext} from 'react'

const Context = createContext("Default value")

const App1 = () => {
    const value = "My Context value!!"
  return (
    <div>
        <Context.Provider value={value}>
            <MyComponent/>
        </Context.Provider>
    </div>
  )
}

const MyComponent = () => {
    const value = useContext(Context)
    return <span>{value}</span>
}

export default App1