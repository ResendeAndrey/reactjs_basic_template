import React, { useState } from 'react'
import { ArrowDown, ArrowUp, BookOpen, Cloud, CloudRain, Code } from 'react-feather'
import { Link, useLocation, useParams } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'
import { useDeviceType } from '../../../context/deviceContext'
import SubMenuSideBar from './SubMenu'

// import { Container } from './styles';
const sidebar = [
  {
    title: 'Inicio',
    icon: <BookOpen />,
    url: '/',
  },
  {
    title: 'Compras',
    icon: <CloudRain />,
    url: '/test',
    children: [
      {
        title: 'ba',
        icon: <Cloud />,
        url: '/',
      },
      {
        title: 'bb',
        icon: <Code />,
        url: '/',
      },
    ],
  },
  {
    title: 'Financeiro',
    icon: <CloudRain />,
    url: '/test1',
    children: [
      {
        title: 'bacadsa',
        icon: <Cloud />,
        url: '/fsafsa',
      },
      {
        title: 'bbfasfsa',
        icon: <Code />,
        url: '/fs',
      },
    ],
  },
]

const Sidebar = () => {
  const location = useLocation()
  const { isMobileView } = useDeviceType()
  const [toggleSubMenu, setToggleSubMenu] = useState<number>(-1)

  const handleToggleSubMenu = (i: number) => {
    setToggleSubMenu(i)
  }
  return (
    <div className='sidebar-menu'>
      <Nav className={isMobileView ? 'flex-nowrap overflow-auto vw-100' : 'flex-wrap'}>
        {sidebar.map((item, index) => (
          <div key={`${item.title}-${index}`} className=' w-100 pointer'>
            <NavItem
              className={`${isMobileView ? 'py-2' : 'py-4'}    ${
                (item.url === location.pathname || toggleSubMenu === index) && 'active'
              }`}
            >
              {item.children ? (
                <>
                  <div
                    className='d-flex justify-content-between ps-3 pe-2 mb-2 align-items-center'
                    onClick={() => {
                      handleToggleSubMenu(toggleSubMenu !== index ? index : -1)
                    }}
                  >
                    <div
                      className={` d-flex align-items-center   ${
                        isMobileView ? 'flex-column' : 'justify-content-start gap-3'
                      }`}
                    >
                      {item.icon && <span>{item.icon}</span>}
                      <span>{item.title}</span>
                    </div>
                    {toggleSubMenu !== index ? <ArrowDown /> : <ArrowUp />}
                  </div>
                  <div className={'sidebar-mobile'}>
                    {item.children.map((subItem, i) => (
                      <SubMenuSideBar
                        title={subItem.title}
                        isOpen={toggleSubMenu === index ? true : false}
                        url={item.url}
                        icon={item.icon}
                        key={i}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  className={` px-3 d-flex align-items-center   ${
                    isMobileView ? 'flex-column' : 'justify-content-start gap-3'
                  }`}
                  to={item.url}
                >
                  {item.icon && <span>{item.icon}</span>}
                  <span>{item.title}</span>
                </Link>
              )}
            </NavItem>
          </div>
        ))}
      </Nav>
    </div>
  )
}

export default Sidebar
