import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import esbuild from 'rollup-plugin-esbuild'
import { ALL_COMPONENTS_PATH, UMD_FILE_PATH } from './utils/paths.ts'
// import nodeResolve from '@rollup/plugin-node-resolve'

const umdBuild = async () => {
    const build = await rollup({
        input: ALL_COMPONENTS_PATH,
        plugins: [
            // 解析 .vue 文件
            vue(),
            // nodeResolve({}),
            esbuild({
                // minify:true
            })
        ],
        external: [ 'vue' ]
    })
    await build.write({
        format: 'umd',
        file: UMD_FILE_PATH,
        name: 'SurgeDerive',
        // 使用默认导出
        exports: 'default',
        // sourcemap: true,
        // 全局变量
        globals: {
            vue: 'Vue'
        }
    })
}

umdBuild()

export default umdBuild