import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Menu, X } from 'react-feather'
import { useDeviceType } from '../../../context/deviceContext'

// import { Container } from './styles';

type HeaderArrayProps = {
  title: string
  url: string
}

type HeaderProps = {
  onToggleSideBar: () => void
  toggleSideBar: boolean
}

const Header = ({ onToggleSideBar, toggleSideBar }: HeaderProps) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const { isMobileView } = useDeviceType()
  const isMobile = isMobileView
  const header = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'XXXX',
      url: '/xxx',
    },
  ] as HeaderArrayProps[]
  const navigate = useNavigate()
  const handleNavigate = (url: string) => {
    navigate(url)
  }

  return (
    <header className='header-fixed p-3 bg-success d-flex align-items-center justify-content-between grid-header grid-header-container'>
      <div className='d-flex gap-5 align-items-center'>
        {!isMobile && (
          <>
            {toggleSideBar ? (
              <ArrowLeft onClick={onToggleSideBar} />
            ) : (
              <ArrowRight onClick={onToggleSideBar} />
            )}
          </>
        )}
        <span>LOGO</span>
      </div>

      <nav className={isNavExpanded ? 'navigation-menu expanded ' : 'navigation-menu'}>
        <ul className='d-flex align-items-center justify-content-center gap-2'>
          {header &&
            header.map((item) => (
              <li
                key={item.title}
                onClick={() => {
                  handleNavigate(item.url)
                }}
                className='d-flex align-items-center'
              >
                {item.title}
              </li>
            ))}
          {isNavExpanded && (
            <X className='navigation-menu-close-icon' onClick={() => setIsNavExpanded(false)} />
          )}
        </ul>
      </nav>

      {isMobile && <Menu onClick={() => setIsNavExpanded(true)} />}
    </header>
  )
}
export default Header
function isMobileView() {
  throw new Error('Function not implemented.')
}
