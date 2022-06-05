## Create a Next.js project with TypeScript

### 1. Create a new Next.js project

Run in command line: ```npx create-next-app <app-name>```.

### 2. Configure with TypeScript
- Create file `tsconfig.json` in the root folder of the project.
- Run in command line: ```npm install --save-dev typescript @types/react @types/node```.
- Use the `"moduleResolution": "node"` in the `tsconfig.json`.
- Turn on TypeScript strict mode `"strict": true`.
- Run in command line: ```npm run dev```.

### 3. Change current `js` files to `tsx` files
In the `_app.tsx` file, change the code like this:
```
function MyApp({ Component, pageProps } : AppProps) {
  return <Component {...pageProps} />
}
```
