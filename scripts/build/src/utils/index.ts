/**
 * 格式化包文件名
 * @param name 名称
 * @param minify 是否压缩
 * @param suffix 后缀
 */
export const formatBundleFilename = (name: string, minify: boolean, suffix: string) => `${ name }${ minify ? '.min' : '' }.${ suffix }`
