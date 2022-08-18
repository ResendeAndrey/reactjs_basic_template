import React, { ReactNode } from 'react'
import { Collapse, NavItem } from 'reactstrap'

// import { Container } from './styles';

type SubMenuSideBarProps = {
  title: string
  icon?: ReactNode
  url: string
  isOpen: boolean
}

const SubMenuSideBar = ({ title, icon, url, isOpen }: SubMenuSideBarProps) => {
  return (
    <Collapse isOpen={isOpen} navbar>
      <div className='d-flex gap-3 ps-5 py-2 bg-primary w-full'>
        {icon && <span>{icon}</span>}
        <span>{title}</span>
      </div>
    </Collapse>
  )
}

export default SubMenuSideBar
