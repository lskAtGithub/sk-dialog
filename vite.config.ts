import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { name as packageName } from './package.json'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      name: packageName,
      entry: './src/MessageBox/',
      formats: ['es', 'cjs'],
      fileName: (format) => `${packageName}.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
