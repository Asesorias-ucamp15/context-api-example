import { createContext } from 'react'

export const MyContext = createContext()

const MyContextProvider = ({children}) => {
  const sharedData = 'hola, yo vengo de un contexto mas elevado'

  return (
    <MyContext.Provider value={sharedData}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContextProvider