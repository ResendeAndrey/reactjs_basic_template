import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

type DeviceType = {
  isMobileView: boolean
}

type DeviceProviderProps = {
  children: ReactNode
}

export const DeviceContext = createContext({} as DeviceType)

export const DeviceProvider = ({ children }: DeviceProviderProps) => {
  const [isMobileView, setIsMobileView] = useState(isMobile)

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window
    return {
      width,
      height,
    }
  }

  useEffect(() => {
    function handleResize() {
      if (getWindowDimensions().width < 767) {
        setIsMobileView(true)
      } else {
        setIsMobileView(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <DeviceContext.Provider
      value={{
        isMobileView,
      }}
    >
      {children}
    </DeviceContext.Provider>
  )
}

export const useDeviceType = () => {
  return useContext(DeviceContext)
}
