import { rollup } from 'rollup'
import { UMD_BUNDLE_PATH } from './utils/paths.ts'
import { resolve } from 'node:path'
import { formatBundleFilename } from './utils'
import { plugins } from './plugins.ts'

/**
 * umd打包
 * @param minify 是否压缩
 */
const umdBuild = async (minify: boolean) => {
    const build = await rollup({
        // 入口文件
        input: resolve('./entrance/default.ts'),
        plugins: plugins(minify),
        // 外部依赖
        external: [ 'vue' ]
    })

    await build.write({
        format: 'umd',
        // 出口文件路径
        file: resolve(UMD_BUNDLE_PATH, formatBundleFilename('index', minify, 'js')),
        name: 'surgeDerivative',
        // 使用默认导出
        exports: 'default',
        // 全局变量
        globals: {
            vue: 'Vue'
        }
    })
}
umdBuild(true)
umdBuild(false)
export default umdBuild