import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// 根路径
export const ROOT_PATH = resolve(dirname(fileURLToPath(import.meta.url)),'..','..', '..', '..')

// 项目路径
export const PACKAGES_PATH = resolve(ROOT_PATH, 'packages')

// 组件模块路径
export const COMPONENTS_PATH = resolve(PACKAGES_PATH,'components')

// 全部组件路径
export const ALL_COMPONENTS_PATH = resolve(COMPONENTS_PATH,'all.ts')

// 按需组件路径
export const NAMED_COMPONENTS_PATH = resolve(COMPONENTS_PATH, 'index.ts')

// 包路径
export const BUNDLE_PATH = resolve(ROOT_PATH, 'dist')

// UMD包路径
export const UMD_BUNDLE_PATH = resolve(BUNDLE_PATH, 'umd')

// UMD输出文件路径
export const UMD_FILE_PATH = resolve(UMD_BUNDLE_PATH, 'index.umd.js')
