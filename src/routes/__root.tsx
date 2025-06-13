import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import Header from '../components/Header'

export const Route = createRootRoute({
  component: Root,
})

function Root() {
  return (
    <>
      <Header />

      <div className="main-content">
        <Outlet />
      </div>
      <TanStackRouterDevtools />
    </>
  )
}
