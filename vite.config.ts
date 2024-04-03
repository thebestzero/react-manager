import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production'
	console.log(isProduction,'supportTs')
  return {
    server: {
      host: 'localhost',
      port: 8080,
      // proxy: {
      //   '/api': 'http://api-driver.marsview.cc'
      // }
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    plugins: [
      react(),
        viteMockServe({
          mockPath: 'mock',
          localEnabled: !isProduction,
          supportTs: true,
          watchFiles: true,
        })
    ]
  }
})
