import { AuthContextProvider } from './context/authContext'
import { DeviceProvider } from './context/deviceContext'
import Router from './router/router'

function App() {
  return (
    <DeviceProvider>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </DeviceProvider>
  )
}

export default App
