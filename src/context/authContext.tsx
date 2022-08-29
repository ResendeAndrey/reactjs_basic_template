import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'

type authContextType = {
  clearSession: () => void
  getToken: () => void
  session: SessionProps
}

type AuthContextProviderProps = {
  children: ReactNode
}

type SessionProps = {
  token: string | null
}

export const AuthContext = createContext({} as authContextType)

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [session, setSession] = useState<SessionProps>({ token: null } as SessionProps)

  const StorageKeys = {
    SESSION: 'userData',
  }

  const getUserData = useCallback(() => {
    const currentSession = localStorage.getItem(StorageKeys.SESSION)
    if (currentSession) {
      setSession(JSON.parse(currentSession))
    }
  }, [StorageKeys.SESSION])

  useEffect(() => {
    getUserData()
  }, [getUserData])

  const clearSession = () => localStorage.removeItem(StorageKeys.SESSION)

  const getToken = () => {
    if (session.token) {
      return session.token
    }
    return null
  }

  return (
    <AuthContext.Provider
      value={{
        session,
        clearSession,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}