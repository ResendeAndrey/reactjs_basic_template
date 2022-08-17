import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { useDeviceType } from '../../../context/deviceContext'

import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'

// import { Container } from './styles';
type LayoutProps = {
  hasSidebar?: boolean
  children: ReactNode
}

const Layout = ({ hasSidebar, children }: LayoutProps) => {
  const { isMobileView } = useDeviceType()
  const [toggleSideBar, setToggleSideBar] = useState(true)

  const onToggleSideBar = () => {
    setToggleSideBar(!toggleSideBar)
  }

  // this keep the sidebar always visible when is mobile - Depends on the client
  const getSideBarFixWhenMobile = useCallback(() => {
    if (isMobileView) {
      setToggleSideBar(true)
    }
  }, [isMobileView])

  useEffect(() => {
    getSideBarFixWhenMobile()
  }, [getSideBarFixWhenMobile])

  return (
    <div>
      <Header onToggleSideBar={onToggleSideBar} toggleSideBar={toggleSideBar} />
      <div
        className={`${hasSidebar ? 'grid-sidebar' : ''} ${!toggleSideBar && 'grid-sidebar-hidden'}`}
      >
        {hasSidebar && toggleSideBar && <Sidebar />}
        <div className='grid-container '>
          {children}

          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
