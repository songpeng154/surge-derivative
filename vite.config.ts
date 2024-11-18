import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    plugins: [ vue() ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/main.ts'),
            formats: [ 'es', 'umd' ]
        },
        rollupOptions: {
            external: [ 'vue' ],
            output: [
                {
                    format: 'es',
                    preserveModules: true,
                    //配置打包根目录
                    dir: 'es',
                    preserveModulesRoot: 'src'
                }
            ]
        },
    },
})
