import { rollup } from 'rollup'
import { CJS_BUNDLE_PATH, ESM_BUNDLE_PATH, PACKAGES_PATH } from './utils/paths.ts'
import { plugins } from './plugins.ts'
import glob from 'fast-glob'
import { excludeFiles } from './utils'
import { resolve } from 'node:path'

export const moduleBuild = async (minify: boolean) => {
    const input = excludeFiles(await glob('**/*.{js,ts,vue}', {
        cwd: PACKAGES_PATH,
        absolute: true,
        onlyFiles: true
    }))
    console.log(resolve('src/entrance/index.ts'))
    const build = await rollup({
        // 入口文件
        input:resolve('src/entrance/index.ts'),
        plugins: plugins(minify),
        // 外部依赖
        external: [
            'vue',
        ]
    })

    await build.write({
        format: 'cjs',
        dir: CJS_BUNDLE_PATH,
        preserveModules: true,
        entryFileNames: '[name].cjs',
        sourcemap: true,
        exports: 'named'
    })

    await build.write({
        format: 'esm',
        dir: ESM_BUNDLE_PATH,
        preserveModules: true,
        // preserveModulesRoot: 'sec',
        entryFileNames: '[name].cjs',
        sourcemap: true,
        exports: undefined
    })
}

moduleBuild(false)