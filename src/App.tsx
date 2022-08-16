import { AuthContextProvider } from './context/authContext'
import Router from './router/router'

function App() {
  return (
    <AuthContextProvider>
      <Router />
    </AuthContextProvider>
  )
}

export default App
