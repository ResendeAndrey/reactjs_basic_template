import React, { ReactNode } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'

// import { Container } from './styles';
type LayoutProps = {
  hasSidebar?: boolean
  children: ReactNode
}

const Layout = ({ hasSidebar, children }: LayoutProps) => {
  return (
    <div className={hasSidebar ? 'grid-sidebar position-fixed w-100' : ''}>
      {hasSidebar && <Sidebar />}
      <div
        className={` grid-container ${hasSidebar ? 'position-relative h-100 overflow-auto' : ''}`}
      >
        <Header />
        <div className='grid-main'>{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
