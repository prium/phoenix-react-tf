declare module 'vite' {
  export interface Plugin {
    name: string;
    configureServer?: (server: any) => void;
  }
}
