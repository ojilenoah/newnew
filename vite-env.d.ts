import 'vite'

declare module 'vite' {
  interface ServerOptions {
    allowedHosts?: boolean | string[];
  }
}
