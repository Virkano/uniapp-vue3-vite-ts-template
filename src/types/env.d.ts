// / <reference types="vite/client" />

//type.d.ts
declare const ROUTES: []

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'uview-plus'

interface ImportMetaEnv {
  readonly VITE_ENV: string
  readonly VITE_APP_TITLE: string
  readonly VITE_BASE_URL: string
  readonly VITE_UPLOAD_URL: string
  readonly VITE_APP_CACHE_PREFIX: string
  readonly VITE_PORT: number
  readonly VITE_USE_MOCK: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
