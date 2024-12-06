import vue from '@vitejs/plugin-vue'
import nodeResolve from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
import replace from '@rollup/plugin-replace'
import commonJs from '@rollup/plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

/**
 * 插件集合
 * @param minify 是否压缩
 */
export const plugins = (minify: boolean) => {
    return [
        // 解析 .vue 文件
        vue(),
        // 解析 npm 包
        nodeResolve({
            // 让该插件识别以下文件
            extensions: [ '.mjs', '.js', '.json', '.ts' ]
        }),
        // 利用 esbuild 高效的性能和功能来进行 JavaScript/TypeScript 的代码编译和转译
        esbuild({
            // 目标环境（兼容 es2018）
            target: 'es2018',
            // 是否压缩
            minify: minify,
            // 是否源代码映射
            sourceMap: minify,
            // 当遇到.vue文件使用ts来处理
            loaders: {
                '.vue': 'ts'
            }
        }),
        postcss({
            // 将 css提取到单独的文件
            extract: 'index.css',
            plugins: [
                // 自动加CSS前缀
                autoprefixer(),
                // 压缩 CSS
                cssnano()
            ],
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production'),
            preventAssignment: true
        }),
        commonJs()
    ]
}

