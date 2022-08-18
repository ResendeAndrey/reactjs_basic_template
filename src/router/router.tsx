import React, { lazy, LazyExoticComponent, ReactNode, Suspense } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Loading from '../components/Loading'
import { useAuth } from '../context/authContext'
import Login from '../pages/Login'
import { DefaultRoute, ExistingRoutes } from './routes'

// import { Container } from './styles';

type FinalRouteProps = {
  layout: any
  component: any
  hasSidebar?: boolean
  routePrivate?: boolean
}

const Router = () => {
  const FinalRoute = ({ layout, component, hasSidebar, routePrivate }: FinalRouteProps) => {
    const { session } = useAuth()
    const Layout = layout
    const Component = component

    if (!session.token && routePrivate) {
      return <Navigate to='/login' />
    } else {
      return (
        <Layout hasSidebar={hasSidebar}>
          <Component {...component}></Component>
        </Layout>
      )
    }
  }

  const ResolveRoutes = () => {
    return (
      <>
        {ExistingRoutes.map((route: any) => {
          const Layout = route.layout || React.Fragment
          const Component = route.component || React.Fragment
          return (
            <Route
              key={`routes-${route.path}`}
              path={route.path}
              element={
                <FinalRoute
                  component={Component}
                  layout={Layout}
                  hasSidebar={route.hasSidebar}
                  routePrivate={route.private}
                />
              }
            />
          )
        })}
      </>
    )
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/login' element={<Login />} />
          {ResolveRoutes()}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
