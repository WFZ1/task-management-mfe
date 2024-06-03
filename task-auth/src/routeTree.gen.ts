/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SignUpImport } from './routes/sign-up'
import { Route as LogInImport } from './routes/log-in'
import { Route as AuthConfirmImport } from './routes/auth/confirm'

// Create/Update Routes

const SignUpRoute = SignUpImport.update({
  path: '/sign-up',
  getParentRoute: () => rootRoute,
} as any)

const LogInRoute = LogInImport.update({
  path: '/log-in',
  getParentRoute: () => rootRoute,
} as any)

const AuthConfirmRoute = AuthConfirmImport.update({
  path: '/auth/confirm',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/log-in': {
      id: '/log-in'
      path: '/log-in'
      fullPath: '/log-in'
      preLoaderRoute: typeof LogInImport
      parentRoute: typeof rootRoute
    }
    '/sign-up': {
      id: '/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof SignUpImport
      parentRoute: typeof rootRoute
    }
    '/auth/confirm': {
      id: '/auth/confirm'
      path: '/auth/confirm'
      fullPath: '/auth/confirm'
      preLoaderRoute: typeof AuthConfirmImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  LogInRoute,
  SignUpRoute,
  AuthConfirmRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/log-in",
        "/sign-up",
        "/auth/confirm"
      ]
    },
    "/log-in": {
      "filePath": "log-in.tsx"
    },
    "/sign-up": {
      "filePath": "sign-up.tsx"
    },
    "/auth/confirm": {
      "filePath": "auth/confirm.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
